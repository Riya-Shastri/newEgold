import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlertDialogBoxComponent } from '../alert-dialog-box/alert-dialog-box.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-common-child-table',
  templateUrl: './common-child-table.component.html',
  styleUrls: ['./common-child-table.component.scss']
})
export class CommonChildTableComponent {

  @Input() childDataSource: any;
  @Input() childColumns: any;
  @Input() childActionType: any;

  displayedChildColumns: any = [];
  dataSource: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    if (this.childColumns) {
      this.displayedChildColumns = this.childColumns.map((c: any) => c.columnDef);
    }
    this.dataSource = new MatTableDataSource<any>(this.childDataSource);
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
      deleteDialog.close();
    });
  }


  tableDrop(event: CdkDragDrop<string[]>) {
    console.log("event....", event);

    if ((event.currentIndex == 0 || event.previousIndex == 0) &&
      this.displayedChildColumns.includes('select')) {
      return;
    }
    if ((event.currentIndex == 1 || event.previousIndex == 1) &&
      this.displayedChildColumns.includes('addAction')) {
      return;
    }
    if ((event.currentIndex == (this.displayedChildColumns.length - 1) ||
      (event.previousIndex == (this.displayedChildColumns.length - 1))) &&
      this.displayedChildColumns.includes('action')) {
      return;
    }

    moveItemInArray(this.displayedChildColumns, event.previousIndex, event.currentIndex);
  }

  sortData(value: any) {
    console.log("value.....", value);
  }


}
