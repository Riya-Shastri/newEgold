import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-depositor-selection",
  templateUrl: "./depositor-selection.component.html",
  styleUrls: ["./depositor-selection.component.scss"],
})
export class DepositorSelectionComponent implements OnInit {
  totalOrderRecords = 20;

  columns1 = [
    {
      columnDef: "DepositorId",
      header: "Depositor Id",
      cell: (element: any) => `${element.DepositorId}`,
      controlType: "number",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "DepositorId",
    },
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
      columnDef: "eGoldCode",
      header: "eGold Code",
      cell: (element: any) => `${element.eGoldCode}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "eGoldCode",
    },
    {
      columnDef: "SD",
      header: "SD",
      cell: (element: any) => `${element.SD}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "SD",
    },
  ];

  dataSource1 = [
    {
      DepositorId: "10",
      Name: "Widget",
      eGoldCode: "210",
      SD: "text",
    },
    {
      DepositorId: "10",
      Name: "Widget",
      eGoldCode: "210",
      SD: "text",
    },
    {
      DepositorId: "10",
      Name: "Widget",
      eGoldCode: "210",
      SD: "text",
    },
    {
      DepositorId: "10",
      Name: "Widget",
      eGoldCode: "210",
      SD: "text",
    },
    {
      DepositorId: "10",
      Name: "Widget",
      eGoldCode: "210",
      SD: "text",
    },
  ];

  isOpen: any = false;

  formControls: any = {};
  depositorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

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

    this.depositorForm = this.formBuilder.group(this.formControls);
  }

  depositorFormSubmit() {
    console.log(this.depositorForm.value);
  }

  setOpen() {
    console.log("Call event...");
    this.isOpen = !this.isOpen;
  }

  sortChange(event: any) {
    if (event) {
      console.log("sort Data.....", event);
    }
  }
}
