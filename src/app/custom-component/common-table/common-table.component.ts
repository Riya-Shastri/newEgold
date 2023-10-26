import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";


@Component({
  selector: "app-common-table",
  templateUrl: "./common-table.component.html",
  styleUrls: ["./common-table.component.scss"]
})
export class CommonTableComponent {

  @Input() searchOption: any = false;
  @Input() datasource: any;
  @Input() tableHeader: any;
  @Input() checkboxSelect: any = false;
  @Input() subModalOption: any = false;
  @Input() settingOption: any = false;
  @Input() reorder: any = false;
  @Input() Pagination: any = 0;
  @Input() limit: any = 5;
  @Input() popSubTableData: any = false;
  @Input() childColumnData: any;
  @Input() action: any = false;
  @Input() subTableaction: any = false;
  @Input() actionOptionArr: any;
  @Input() settingOptionArr: any;
  @ViewChild("myTable") table: any;

  @Output() SearchValue: EventEmitter<any> = new EventEmitter();
  @Output() selectedRows: EventEmitter<any> = new EventEmitter();


  constructor(
  ) {

  }

  ngOnInit(): void {

  }



}
