import { SelectionModel } from "@angular/cdk/collections";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, MatSortable } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-common-table",
  templateUrl: "./common-table.component.html",
  styleUrls: ["./common-table.component.scss"],
})
export class CommonTableComponent {
  searchForm: FormGroup;
  displayedColumns: any = [];
  pageIndex: any;
  pageLength: any;
  currentPageSize: any;
  selectedChildRowIndex = null;
  isEdit = false;
  rowIndex = null;

  @Input() columns: any;
  @Input() dataSource: any;
  @Input() defaultShortKey: any;
  @Input() totalRecords: any;
  @Input() actionType: any;
  @Input() menuItems: any;
  @Input() mainIconForMenu: any;

  @Input() isChildTable: any;
  @Input() childActionType: any;
  @Input() childDataSourceKey: any;
  @Input() childTableColumns: any;

  @Output() emitPagesValue: EventEmitter<any> = new EventEmitter<any>();
  @Output() updatedData = new EventEmitter<any>();
  @Output() dataSort = new EventEmitter<any>();
  @Output() SearchValue: EventEmitter<any> = new EventEmitter();
  @Output() selectedRows: EventEmitter<any> = new EventEmitter();

  @ViewChild("paginator", { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  selection = new SelectionModel<any>(true, []);
  editTableForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.columns) {
      this.displayedColumns = this.columns.map((c: any) => c.columnDef);
    }

    this.initialForm();
    this.dataSource = new MatTableDataSource<any>(this.dataSource);
    this.initTableFormGroup();
  }

  initialForm() {
    this.searchForm = this.formBuilder.group({
      searchValue: new FormControl("", [Validators.required]),
    });
  }

  async initTableFormGroup() {
    if (this.dataSource && this.dataSource.data.length > 0) {
      const controls: any = await this.addTableControlsForParent(
        this.dataSource.data[0]
      );
      this.editTableForm = this.formBuilder.group({ ...controls });
    }
  }

  addTableControlsForParent(newControlsObj: any) {
    return new Promise((resolve, reject) => {
      let tempObj: any = {};
      for (const key in newControlsObj) {
        if (this.displayedColumns.includes(key)) {
          const columnDetailIndex = this.columns.findIndex(
            (obj: any) => obj.columnDef == key
          );

          if (columnDetailIndex >= 0) {
            const columnDetail = this.columns[columnDetailIndex];

            if (
              columnDetail &&
              columnDetail["isControlRequired"] &&
              !columnDetail["isValidationPattern"]
            ) {
              tempObj[key] = new FormControl(newControlsObj[key], [
                Validators.required,
              ]);
            } else if (
              columnDetail &&
              !columnDetail["isControlRequired"] &&
              !columnDetail["isValidationPattern"]
            ) {
              tempObj[key] = new FormControl(newControlsObj[key]);
            } else if (
              columnDetail &&
              columnDetail["isControlRequired"] &&
              columnDetail["isValidationPattern"]
            ) {
              tempObj[key] = new FormControl(newControlsObj[key], [
                Validators.required,
                Validators.pattern(columnDetail["isValidationPattern"]),
              ]);
            }
          }
        } else {
          tempObj[key] = new FormControl(newControlsObj[key]);
        }
      }
      resolve(tempObj);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataSource) {
      if (changes && changes.dataset && changes.dataset.currentValue) {
        this.dataSource = new MatTableDataSource<any>(
          changes.dataset.currentValue
        );
      }
    }
  }

  AfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.sort.sort(this.defaultShortKey as MatSortable);
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    this.dataSource.sort = this.sort;
    this.removePaginatorTooltip();
  }

  getSearchValue() {
    this.SearchValue.emit(this.searchForm.value.searchValue);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection?.selected?.length;
    const numRows = this.dataSource?.data?.length;
    // this.selectedRows.emit((this.selection && this.selection.selected
    //   && this.selection.selected.length > 0) ? this.selection.selected : []);
    return numSelected === numRows;
  }

  onRowSelected(event: any) {
    this.selectedRows.emit(
      this.selection &&
        this.selection.selected &&
        this.selection.selected.length > 0
        ? this.selection.selected
        : []
    );
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? "deselect" : "select"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.position + 1
    }`;
  }

  onPaginateChange(value: any) {
    this.paginator.pageSize = value.pageSize;
    this.paginator.length = this.totalRecords;
    this.paginator.pageIndex = value.pageIndex;
    this.pageIndex = value.pageIndex;
    if (value.pageSize !== null && value.pageSize !== undefined) {
      this.emitPagesValue.emit(value);
    }
  }

  removePaginatorTooltip() {
    //To remove tooltip on paginator
    if (this.paginator) {
      const paginatorIntl = this.paginator["_intl"];
      paginatorIntl.nextPageLabel = "";
      paginatorIntl.previousPageLabel = "";
      paginatorIntl.lastPageLabel = "";
      paginatorIntl.firstPageLabel = "";
    }
  }

  sortData(value: any) {
    this.dataSort.emit(value);
  }

  onActionClick(actionType: any, rowData: any, index: any) {
    console.log("actionType..", actionType);
    console.log("rowData..", rowData);
    console.log("index..", index);

    this.rowIndex = index;
    if (actionType == "edit") {
      this.isEdit = true;
    }

    if (actionType == "save") {
      this.isEdit = false;
      this.rowIndex = null;
      console.log("form......", this.editTableForm.value);
      this.updatedData.emit(this.editTableForm.value);
    }
  }

  setDynamicId(index: any) {
    if (this.selectedChildRowIndex || this.selectedChildRowIndex == 0) {
      this.selectedChildRowIndex = null;
    } else {
      this.selectedChildRowIndex = index;
    }
  }

  closeTableMenu() {
    this.selectedChildRowIndex = null;
  }

  tableDrop(event: CdkDragDrop<string[]>) {
    if (
      (event.currentIndex == 0 || event.previousIndex == 0) &&
      this.displayedColumns.includes("select")
    ) {
      return;
    }
    if (
      (event.currentIndex == 1 || event.previousIndex == 1) &&
      this.displayedColumns.includes("addAction")
    ) {
      return;
    }
    if (
      (event.currentIndex == this.displayedColumns.length - 1 ||
        event.previousIndex == this.displayedColumns.length - 1) &&
      this.displayedColumns.includes("action")
    ) {
      return;
    }

    moveItemInArray(
      this.displayedColumns,
      event.previousIndex,
      event.currentIndex
    );
  }
}
