import { filter } from 'rxjs/operators';
import { SelectionModel } from "@angular/cdk/collections";
import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, MatSortable } from "@angular/material/sort";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { AlertDialogBoxComponent } from "../alert-dialog-box/alert-dialog-box.component";
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

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

  @Input() columns: any;
  @Input() dataSource: any;
  @Input() defaultShortKey: any;
  @Input() totalRecords: any;
  @Input() actionType: any;
  @Input() menuItems: any;
  @Input() menuIconForMenu: any;
  @Input() isChildTable: any;

  @Output() emitPagesValue: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteData = new EventEmitter<any>();
  @Output() dataSort = new EventEmitter<any>();

  @Output() SearchValue: EventEmitter<any> = new EventEmitter();
  @Output() selectedRows: EventEmitter<any> = new EventEmitter();

  @ViewChild('paginator', { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  selection = new SelectionModel<any>(true, []);

  childTableColumns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: any) => `${element.position}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: any) => `${element.name}`,
    },
    {
      columnDef: 'weight',
      header: 'Weight',
      cell: (element: any) => `${element.weight}`,
    },
    {
      columnDef: 'symbol',
      header: 'Symbol',
      cell: (element: any) => `${element.symbol}`,
    },
  ];

  childDataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  childColumns = this.childTableColumns.map(c => c.columnDef);
  selectedChildRowIndex = null;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.initialForm();
    this.displayedColumns = this.columns.map((c: any) => c.columnDef);
    this.displayedColumns.unshift('select');
    this.dataSource = new MatTableDataSource<any>(this.dataSource);
  }

  initialForm() {
    this.searchForm = this.fb.group({
      searchValue: new FormControl("", [Validators.required]),
    });
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

  openDeleteDialog(detail: any) {
    const deleteDialog = this.dialog.open(AlertDialogBoxComponent, {
      width: '400px',
      data: { title: 'Warning', content: "Are you sure, you want to delete?", type: "Confirm" },
      disableClose: false
    });
    deleteDialog.afterClosed().subscribe((result: any) => {
      console.log("result.....", result);

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

  // ==================== CODE FOR DATAGRIDE START ========================

  // @Input() dataSource: any = [];
  // @Input() columns: MtxGridColumn[] = [];
  // @Input() tableHeader: any = '';
  // isLoading = true;
  // columnResizable = true;
  // multiSelectable = true;
  // rowSelectable = true;
  // hideRowSelectionCheckbox = false;
  // rowHover = true;
  // rowStriped = false;
  // showToolbar = true;
  // columnHideable = true;
  // columnSortable = true;
  // columnPinnable = true;
  // showPaginator = true;
  // expandable = true;

  // ngOnInit(): void {
  //   this.initialForm();
  //   if (this.dataSource) {
  //     this.isLoading = false;
  //   }
  // }

  // initialForm() {
  //   this.searchForm = this.fb.group({
  //     searchValue: new FormControl("", [Validators.required]),
  //   });
  // }

  // changeSelect(e: any) {
  //   console.log(e);
  // }

  // changeSort(e: any) {
  //   console.log(e);
  // }

  // enableRowExpandable() {
  //   this.columns[0].showExpand = this.expandable;
  // }

  // //Format Any Table Data
  // updateCell() {
  //   this.dataSource = this.dataSource.map((item: any) => {
  //     item.weight = Math.round(Math.random() * 1000) / 100;
  //     return item;
  //   });
  // }

  // updateList() {
  //   this.dataSource = this.dataSource.splice(-1).concat(this.dataSource);
  // }
}
