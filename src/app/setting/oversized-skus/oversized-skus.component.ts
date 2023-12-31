import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-oversized-skus",
  templateUrl: "./oversized-skus.component.html",
  styleUrls: ["./oversized-skus.component.scss"],
})
export class OversizedSkusComponent implements OnInit {
  totalOrderRecords = 20;
  productMaximalDimensions: FormGroup;
  skusForm: FormGroup;

  productDimensionsArr = [
    { label: "GETPACKAGE VM CONSTRAINTS", value: "GETPACKAGE VM CONSTRAINTS" },
    {
      label: "GETDELIVERY VM CONSTRAINTS",
      value: "GETDELIVERY VM CONSTRAINTS",
    },

    { label: "ZIGZAG VM CONSTRAINTS", value: "ZIGZAG VM CONSTRAINTS" },
    {
      label: "ND TO SD CHANGE TIME WINDOW",
      value: "ND TO SD CHANGE TIME WINDOW",
    },
  ];

  columns1 = [
    {
      columnDef: "SKUCode",
      header: "SKU Code",
      cell: (element: any) => `${element.SKUCode}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "SKUCode",
    },
    {
      columnDef: "ProductName",
      header: "Product Name",
      cell: (element: any) => `${element.ProductName}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "ProductName",
    },
  ];

  dataSource1 = [
    {
      SKUCode: "10215",
      ProductName: "Text",
    },
    {
      SKUCode: "10215",
      ProductName: "Text2",
    },
    {
      SKUCode: "10215",
      ProductName: "Text3",
    },
    {
      SKUCode: "10215",
      ProductName: "Text4",
    },
    {
      SKUCode: "10215",
      ProductName: "Text5",
    },
    {
      SKUCode: "10215",
      ProductName: "Text10",
    },
  ];

  formControls: any = {};

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initTableFormGroup();
    this.initSKUForm();
    this.productDimensionsArr.forEach((ele) => {
      this.tableData.push(this.createItemFormGroup(null, ele.label));
    });

    // console.log("form value.........", this.productMaximalDimensions.value);
  }

  initTableFormGroup() {
    this.productMaximalDimensions = this.formBuilder.group({
      tableData: this.formBuilder.array([]),
    });
  }

  initSKUForm() {
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

    // console.log(this.formControls);

    this.skusForm = this.formBuilder.group(this.formControls);
  }

  createItemFormGroup(item: any = {}, title: any) {
    const group = this.formBuilder.group({
      title: [title ? title : ""],
      Width: [
        item && item.Width && title ? item.Width : 1,
        Validators.required,
      ],
      Length: [
        item && item.Length && title ? item.Length : 1,
        Validators.required,
      ],
      Height: [
        item && item.Height && title ? item.Height : 1,
        Validators.required,
      ],
      Weight: [
        item && item.Weight && title ? item.Weight : 1,
        Validators.required,
      ],
    });
    return group;
  }

  get tableData(): FormArray {
    return this.productMaximalDimensions.get("tableData") as FormArray;
  }

  productMaximalFormSubmit() {
    console.log(this.productMaximalDimensions.value.tableData);
  }

  skusFormSubmit() {
    console.log(this.skusForm.value);
  }

  sortChange(event: any) {
    if (event) {
      console.log("sort Data.....", event);
    }
  }
}
