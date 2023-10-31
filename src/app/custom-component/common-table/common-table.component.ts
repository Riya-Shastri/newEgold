import { SelectionModel } from "@angular/cdk/collections";
import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, MatSortable } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AlertDialogBoxComponent } from "../alert-dialog-box/alert-dialog-box.component";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-common-table",
  templateUrl: "./common-table.component.html",
  styleUrls: ["./common-table.component.scss"],
})

export class CommonTableComponent {

  searchForm: FormGroup;
  displayedColumns: any = [];
  displayedChildColumns: any = [];
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
  @Output() deleteData = new EventEmitter<any>();
  @Output() dataSort = new EventEmitter<any>();

  @Output() SearchValue: EventEmitter<any> = new EventEmitter();
  @Output() selectedRows: EventEmitter<any> = new EventEmitter();

  @ViewChild('paginator', { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  selection = new SelectionModel<any>(true, []);

  finalTableForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    this.initialForm();
    this.initTableFormGroup();

    if (this.columns) {
      this.displayedColumns = this.columns.map((c: any) => c.columnDef);
    }
    if (this.childTableColumns) {
      this.displayedChildColumns = this.childTableColumns.map((c: any) => c.columnDef);
    }
    this.dataSource = new MatTableDataSource<any>(this.dataSource);
  }

  initialForm() {
    this.searchForm = this.formBuilder.group({
      searchValue: new FormControl("", [Validators.required]),
    });
  }

  initTableFormGroup() {
    this.finalTableForm = this.formBuilder.group({
      tableData: this.formBuilder.array([])
    });
  }

  get tableData(): FormArray {
    return this.finalTableForm.get('tableData') as FormArray;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataSource) {
      if (changes && changes.dataset && changes.dataset.currentValue) {
        this.dataSource = new MatTableDataSource<any>(changes.dataset.currentValue);
      }
    }
  }

  AfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.sort.sort((this.defaultShortKey) as MatSortable);
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
    return numSelected === numRows;
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
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
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
      const paginatorIntl = this.paginator['_intl'];
      paginatorIntl.nextPageLabel = '';
      paginatorIntl.previousPageLabel = '';
      paginatorIntl.lastPageLabel = '';
      paginatorIntl.firstPageLabel = '';
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

    if (actionType == 'delete') {
      this.openDeleteDialog(rowData)
    }

    if (actionType == 'edit') {
      this.isEdit = true;
    }

  }

  onChildActionClick(actionType: any, rowData: any, index: any) {
    console.log("actionType..", actionType);
    console.log("rowData..", rowData);
    console.log("index..", index);
    if (actionType == 'delete') {
      this.openDeleteDialog(rowData)
    }
  }

  openDeleteDialog(detail: any) {
    const deleteDialog = this.dialog.open(AlertDialogBoxComponent, {
      width: '400px',
      data: { title: 'Warning', content: "Are you sure, you want to delete?", type: "Confirm" },
      disableClose: false
    });
    deleteDialog.afterClosed().subscribe((result: any) => {
      console.log("result.....", result);
      this.rowIndex = null;
      if (result && result == 'Yes') {
        this.deleteData.emit({ detail: detail });
      }
      deleteDialog.close();
    });
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
    console.log("event....", event);

    if ((event.currentIndex == 0 || event.previousIndex == 0) &&
      this.displayedColumns.includes('select')) {
      return;
    }
    if ((event.currentIndex == 1 || event.previousIndex == 1) &&
      this.displayedColumns.includes('addAction')) {
      return;
    }
    if ((event.currentIndex == (this.displayedColumns.length - 1) ||
      (event.previousIndex == (this.displayedColumns.length - 1))) &&
      this.displayedColumns.includes('action')) {
      return;
    }

    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

}
