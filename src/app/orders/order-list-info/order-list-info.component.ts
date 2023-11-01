import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-order-list-info",
  templateUrl: "./order-list-info.component.html",
  styleUrls: ["./order-list-info.component.scss"],
})
export class OrderListInfoComponent implements OnInit {
  totalOrderRecords = 100;

  actionsTypeArr = [
    { name: "edit", icons: "edit", class: "text-success" },
    // { name: "delete", icons: "delete", class: 'text-danger' }
  ];

  settingOptionArr = [
    { label: "Dispatch", icon: "Dispatch.svg" },
    { label: "Return Order", icon: "Return.svg" },
    { label: "Print sticker", icon: "Print sticker.svg" },
    { label: "Send Latest HJ status", icon: "Status.svg" },
    { label: "Cancel order", icon: "Outline.svg" },
  ];

  sourceOptions = [
    { label: "Source1", value: 1 },
    { label: "Source2", value: 2 },
    { label: "Source3", value: 3 },
    { label: "Source4", value: 4 },
    { label: "Source5", value: 5 },
    { label: "Source6", value: 6 },
    { label: "Source7", value: 7 },
  ];

  parentColumns = [
    {
      columnDef: "select",
      header: "",
      cell: (element: any) => `${element.select}`,
    },
    {
      columnDef: "addAction",
      header: "",
      cell: (element: any) => `${element.addAction}`,
    },
    {
      columnDef: "Depositor",
      header: "Depositor",
      cell: (element: any) => `${element.Depositor}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "Depositor",
    },
    {
      columnDef: "OrderID",
      header: "Order ID",
      cell: (element: any) => `${element.OrderID}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "OrderID",
    },
    {
      columnDef: "Source",
      header: "Source",
      cell: (element: any) => `${element.Source}`,
      controlType: "select",
      sourceOptions: this.sourceOptions,
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "Source",
    },
    {
      columnDef: "Time",
      header: "Time",
      cell: (element: any) => `${element.Time}`,
      controlType: "date",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "Time",
    },
    {
      columnDef: "ShippingType",
      header: "ShippingType",
      cell: (element: any) => `${element.ShippingType}`,
      controlType: "text",
      defaultValue: "",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "ShippingType",
    },
    {
      columnDef: "action",
      header: "Action",
      cell: (element: any) => `${element.Action}`,
    },
  ];

  parentDataSource = [
    {
      Depositor: "David Lee",
      OrderID: "1111222233",
      Source: "www.electrohub.com",
      Time: "2023-11-06",
      ShippingType: "Two-Day",
      product: [
        {
          sku: "24681",
          productName: "Gadget",
          quantity: 3,
        },
        {
          sku: "11112",
          productName: "Widget",
          quantity: 2,
        },
        {
          sku: "44444",
          productName: "Gizmo",
          quantity: 2,
        },
        {
          sku: "66666",
          productName: "Doohickey",
          quantity: 4,
        },
      ],
    },
    {
      Depositor: "Sarah Taylor",
      OrderID: "8888888888",
      Source: "www.gizmogalore.com",
      Time: "2023-11-05",
      ShippingType: "Ground",
      product: [
        {
          sku: "11112",
          productName: "Widget",
          quantity: 2,
        },
      ],
    },
    {
      Depositor: "Michael Brown",
      OrderID: "4444444444",
      Source: "www.quickmart.com",
      Time: "2023-11-04",
      ShippingType: "Overnight",
      product: [
        {
          sku: "99999",
          productName: "Contraption",
          quantity: 5,
        },
      ],
    },
    {
      Depositor: "Eva Williams",
      OrderID: "7777777777",
      Source: "www.shopnow.com",
      Time: "2023-11-03",
      ShippingType: "Same Day",
      product: [
        {
          sku: "77777",
          productName: "Thingamajig",
          quantity: 3,
        },
        {
          sku: "88888",
          productName: "Doodad",
          quantity: 1,
        },
      ],
    },
    {
      Depositor: "Bob Johnson",
      OrderID: "5555555555",
      Source: "www.testshop.com",
      Time: "2023-11-02",
      ShippingType: "Next Day",
      product: [
        {
          sku: "44444",
          productName: "Gizmo",
          quantity: 2,
        },
        {
          sku: "66666",
          productName: "Doohickey",
          quantity: 4,
        },
      ],
    },
    {
      Depositor: "Hydrogen",
      OrderID: "1607926887075",
      Source: "www.matero.com",
      Time: "010-12345678",
      ShippingType: "matero",
      product: [
        {
          sku: "12345",
          productName: "Widget",
          quantity: 5,
        },
        {
          sku: "24680",
          productName: "Doohickey",
          quantity: 2,
        },
      ],
      Action: "",
    },
    {
      Depositor: "Hydrogen",
      OrderID: "1607926887075",
      Source: "www.matero.com",
      Time: "010-12345678",
      ShippingType: "matero",
      product: [
        {
          sku: "12345",
          productName: "Widget",
          quantity: 5,
        },
        {
          sku: "24680",
          productName: "Doohickey",
          quantity: 2,
        },
      ],
      Action: "",
    },
    {
      Depositor: "Linda Evans",
      OrderID: "5555666677",
      Source: "www.technomarket.com",
      Time: "2023-11-07",
      ShippingType: "Standard",
      product: [
        {
          sku: "13579",
          productName: "Device",
          quantity: 2,
        },
      ],
    },
    {
      Depositor: "Robert Clark",
      OrderID: "1234000011",
      Source: "www.gadgetworld.com",
      Time: "2023-11-08",
      ShippingType: "Express",
      product: [
        {
          sku: "56789",
          productName: "Gizmo",
          quantity: 3,
        },
      ],
    },
    {
      Depositor: "Hydrogen",
      OrderID: "1607926887075",
      Source: "www.matero.com",
      Time: "010-12345678",
      ShippingType: "matero",
      product: [
        {
          sku: "12345",
          productName: "Widget",
          quantity: 5,
        },
        {
          sku: "24680",
          productName: "Doohickey",
          quantity: 2,
        },
      ],
      Action: "",
    },
    {
      Depositor: "Hydrogen",
      OrderID: "1607926887075",
      Source: "www.matero.com",
      Time: "010-12345678",
      ShippingType: "matero",
      product: [
        {
          sku: "12345",
          productName: "Widget",
          quantity: 5,
        },
        {
          sku: "24680",
          productName: "Doohickey",
          quantity: 2,
        },
      ],
      Action: "",
    },
  ];

  childTableColumns = [
    {
      columnDef: "select",
      header: "",
      cell: (element: any) => `${element.select}`,
    },
    {
      columnDef: "sku",
      header: "SKU",
      cell: (element: any) => `${element.sku}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "SKU",
    },
    {
      columnDef: "productName",
      header: "Product Name",
      cell: (element: any) => `${element.productName}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "Product Name",
    },
    {
      columnDef: "quantity",
      header: "Quantity",
      cell: (element: any) => `${element.quantity}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "Quantity",
    },
    {
      columnDef: "action",
      header: "Action",
      cell: (element: any) => `${element.action}`,
    },
  ];

  childActionTypeArr = [
    { name: "edit", icons: "edit", class: "text-success" },
    // { name: "delete", icons: "delete", class: 'text-danger' },
    // { name: "save", icons: "save", class: 'text-primary' },
  ];

  childDataSourceKey = "product";

  newRecord: FormGroup;

  formControls: any = {};
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // for (const key of Object.keys(this.newRecordControl)) {
    //   formControls[key] = new FormControl("", [Validators.required]);
    // }

    this.parentColumns.forEach((ele: any) => {
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

    // this.parentColumns.forEach((ele: any) => {
    //   if (
    //     ele.columnDef !== "select" &&
    //     ele.columnDef !== "action" &&
    //     ele.columnDef !== "addAction"
    //   ) {
    //     if (
    //       ele.columnDef &&
    //       ele["isControlRequired"] &&
    //       !ele["isValidationPattern"]
    //     ) {
    //       formControls[ele.columnDef] = new FormControl("", [
    //         Validators.required,
    //       ]);
    //     } else if (
    //       columnDetail &&
    //       !columnDetail["isControlRequired"] &&
    //       !columnDetail["isValidationPattern"]
    //     ) {
    //       tempObj[key] = new FormControl(newControlsObj[key]);
    //     } else if (
    //       columnDetail &&
    //       columnDetail["isControlRequired"] &&
    //       columnDetail["isValidationPattern"]
    //     ) {
    //       tempObj[key] = new FormControl(newControlsObj[key], [
    //         Validators.required,
    //         Validators.pattern(columnDetail["isValidationPattern"]),
    //       ]);
    //     }
    //     formControls[ele.columnDef] = new FormControl(ele.defaultValue, [
    //       Validators.required,
    //     ]);
    //   }
    // });
    console.log(this.formControls);

    this.newRecord = this.formBuilder.group(this.formControls);
  }

  newRecordSubmit() {
    console.log(this.newRecord.value);
  }

  getEditData(updateData: any) {
    console.log("updateData.....", updateData);
  }

  sortChange(event: any) {
    if (event) {
      console.log("sort Data.....", event);
    }
  }

  getPaginationDetail(event: any) {
    if (event) {
      console.log("pagination Data.....", event);
    }
  }

  getSearchValue(event: any) {
    if (event) {
      console.log("Search Data.....", event);
    }
  }

  getSelectedRows(event: any) {
    if (event) {
      console.log("Selected Data.....", event);
    }
  }

  getUpdatedDetail(event: any) {
    if (event) {
      console.log("Updated record.....", event);
    }
  }

  getCurrentPaginationValue(event: any) {
    if (event) {
      console.log("get pagination detail.....", event);
    }
  }

  updatedChildTableData(event: any) {
    if (event) {
      console.log("get updated child row detail.....", event);
    }
  }
}
