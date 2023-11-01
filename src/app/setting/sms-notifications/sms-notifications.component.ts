import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-sms-notifications",
  templateUrl: "./sms-notifications.component.html",
  styleUrls: ["./sms-notifications.component.scss"],
})
export class SmsNotificationsComponent implements OnInit {
  totalOrderRecords = 20;

  columns1 = [
    {
      columnDef: "Name",
      header: "Name",
      cell: (element: any) => `${element.Name}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "Name",
    },
    {
      columnDef: "ContentTemplate",
      header: "Content Template",
      cell: (element: any) => `${element.ContentTemplate}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "ContentTemplate",
    },
    {
      columnDef: "BaseLength",
      header: "Base Length",
      cell: (element: any) => `${element.BaseLength}`,
      controlType: "number",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "BaseLength",
    },
    {
      columnDef: "action",
      header: "",
      cell: (element: any) => `${element.Action}`,
    },
  ];

  dataSource1 = [
    {
      Name: "Hydrogen",
      ContentTemplate: "1607926887075",
      BaseLength: "5",
    },
    {
      Name: "Helium",
      ContentTemplate: "1607926887076",
      BaseLength: "6",
    },
    {
      Name: "Lithium",
      ContentTemplate: "1607926887077",
      BaseLength: "7",
    },
    {
      Name: "Beryllium",
      ContentTemplate: "1607926887078",
      BaseLength: "8",
    },
    {
      Name: "Boron",
      ContentTemplate: "1607926887079",
      BaseLength: "9",
    },
    {
      Name: "Carbon",
      ContentTemplate: "1607926887080",
      BaseLength: "10",
    },
    {
      Name: "Nitrogen",
      ContentTemplate: "1607926887081",
      BaseLength: "11",
    },
    {
      Name: "Oxygen",
      ContentTemplate: "1607926887082",
      BaseLength: "12",
    },
    {
      Name: "Fluorine",
      ContentTemplate: "1607926887083",
      BaseLength: "13",
    },
    {
      Name: "Neon",
      ContentTemplate: "1607926887084",
      BaseLength: "14",
    },
  ];

  actionsTypeArr = [
    { name: "edit", icons: "edit", class: "text-success" },
    // { name: "delete", icons: "delete", class: "text-danger" },
    // { name: "save", icons: "save", class: "text-primary" },
  ];

  settingOptionArr = [
    { name: "edit", icons: "cilPencil" },
    { name: "delete", icons: "cilPencil" },
  ];

  smsNotification: FormGroup;

  formControls: any = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.columns1.forEach((ele: any) => {
      if (
        ele.columnDef !== "select" &&
        ele.columnDef !== "action" &&
        ele.columnDef !== "addAction"
      ) {
        if (
          ele.columnDef &&
          ele["isControlRequired"] &&
          !ele["isValidationPattern"]
        ) {
          this.formControls[ele.columnDef] = new FormControl("", [
            Validators.required,
          ]);
        } else if (
          ele.columnDef &&
          !ele["isControlRequired"] &&
          !ele["isValidationPattern"]
        ) {
          this.formControls[ele.columnDef] = new FormControl("", [
            Validators.required,
          ]);
        } else if (
          ele.columnDef &&
          ele["isControlRequired"] &&
          ele["isValidationPattern"]
        ) {
          this.formControls[ele.columnDef] = new FormControl([
            Validators.required,
            Validators.pattern(ele["isValidationPattern"]),
          ]);
        }

        this.formControls[ele.columnDef] = new FormControl(ele.defaultValue, [
          Validators.required,
        ]);
      }
    });

    console.log(this.formControls);

    this.smsNotification = this.fb.group(this.formControls);
  }

  sortChange(event: any) {
    if (event) {
      console.log("sort Data.....", event);
    }
  }

  smsNewRecordSubmit() {
    console.log(this.smsNotification.value);
  }
}
