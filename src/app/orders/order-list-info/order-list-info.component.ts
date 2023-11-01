import { Component, OnInit } from "@angular/core";

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
    },
    {
      columnDef: "Time",
      header: "Time",
      cell: (element: any) => `${element.Time}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
    },
    {
      columnDef: "ShippingType",
      header: "ShippingType",
      cell: (element: any) => `${element.ShippingType}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
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
      columnDef: "sku",
      header: "SKU",
      cell: (element: any) => `${element.sku}`,
    },
    {
      columnDef: "productName",
      header: "Product Name",
      cell: (element: any) => `${element.productName}`,
    },
    {
      columnDef: "quantity",
      header: "Quantity",
      cell: (element: any) => `${element.quantity}`,
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

  constructor() {}

  ngOnInit(): void {}

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
}
