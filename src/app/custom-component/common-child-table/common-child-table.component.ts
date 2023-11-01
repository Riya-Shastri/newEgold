import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-common-child-table',
  templateUrl: './common-child-table.component.html',
  styleUrls: ['./common-child-table.component.scss']
})
export class CommonChildTableComponent {

  @Input() childDataSource: any;
  @Input() childColumns: any;
  @Input() childActionType: any;
  @Input() parentTableRowDetail: any;
  @Input() childDataSourceKey: any;
  @Output() editedChildTableResponse: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // console.log("childColumns...........", this.childColumns);
    // console.log("dataSource...........", this.dataSource.data);
  }


  getUpdatedDetail(event: any) {
    if (event) {
      if (this.parentTableRowDetail && this.parentTableRowDetail[this.childDataSourceKey] &&
        this.parentTableRowDetail[this.childDataSourceKey].length > 0) {
        console.log("Updated record.....", event);
        const finalData = { ...this.parentTableRowDetail };
        finalData[this.childDataSourceKey][event.currentIndex] = event.newData;
        this.editedChildTableResponse.emit({ childDetail: event, parentDetail: finalData });
        // { currentIndex: 1, newData: {… } }
      }
    }
  }

}
