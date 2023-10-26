import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-oversized-skus",
  templateUrl: "./oversized-skus.component.html",
  styleUrls: ["./oversized-skus.component.scss"],
})
export class OversizedSkusComponent implements OnInit {

  productMaximalDimensions: FormGroup;

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

  columnHeader = [
    { name: "SKU Code", sortable: false },
    { name: "Product Name", sortable: false },
  ];

  rowDetails = [
    {
      skuCode: "10",
      productName: "Widget",
    },
    {
      skuCode: "12",
      productName: "Widget",
    },
    {
      skuCode: "23",
      productName: "Widget",
    },
    {
      skuCode: "34",
      productName: "Widget",
    },
    {
      skuCode: "45",
      productName: "Widget",
    },
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initTableFormGroup();
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
}
