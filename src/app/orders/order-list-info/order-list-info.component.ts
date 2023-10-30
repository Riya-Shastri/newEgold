import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MtxGridColumn } from "@ng-matero/extensions/grid";
import { PeriodicElement } from "app/themefolders/routes/dashboard/dashboard.service";

@Component({
  selector: "app-order-list-info",
  templateUrl: "./order-list-info.component.html",
  styleUrls: ["./order-list-info.component.scss"],
})
export class OrderListInfoComponent implements OnInit {

  totalOrderRecords = 100;

  actionsTypeArr = [
    { name: "edit", icons: "edit", class: 'text-success' },
    { name: "delete", icons: "delete", class: 'text-danger' },
    { name: "save", icons: "save", class: 'text-primary' },
  ];

  settingOptionArr = [
    { label: "Dispatch", icon: "Dispatch.svg" },
    { label: "Return Order", icon: "Return.svg" },
    {
      label: "Print sticker",
      icon: "Print sticker.svg",
    },
    {
      label: "Send Latest HJ status",
      icon: "Status.svg",
    },
    { label: "Cancel order", icon: "Outline.svg" },
  ];

  parentColumns = [
    {
      columnDef: 'addAction',
      header: '',
      cell: (element: any) => `${element.addAction}`,
    },
    {
      columnDef: 'Depositor',
      header: 'Depositor',
      cell: (element: any) => `${element.Depositor}`,
    },
    {
      columnDef: 'OrderID',
      header: 'Order ID',
      cell: (element: any) => `${element.OrderID}`,
    },
    {
      columnDef: 'Source',
      header: 'Source',
      cell: (element: any) => `${element.Source}`,
    },
    {
      columnDef: 'Time',
      header: 'Time',
      cell: (element: any) => `${element.Time}`,
    },
    {
      columnDef: 'ShippingType',
      header: 'ShippingType',
      cell: (element: any) => `${element.ShippingType}`,
    },
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: any) => `${element.Action}`,
    }
  ];

  parentDataSource = [
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
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
      Action: ''
    },
  ]


  childTableColumns = [
    {
      columnDef: 'sku',
      header: 'sku',
      cell: (element: any) => `${element.sku}`,
    },
    {
      columnDef: 'productName',
      header: 'Product Name',
      cell: (element: any) => `${element.productName}`,
    },
    {
      columnDef: 'quantity',
      header: 'Quantity',
      cell: (element: any) => `${element.quantity}`,
    },
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: any) => `${element.action}`,
    }
  ];

  childActionTypeArr = [
    { name: "edit", icons: "edit", class: 'text-success' },
    { name: "delete", icons: "delete", class: 'text-danger' },
    { name: "save", icons: "save", class: 'text-primary' },
  ];

  childDataSourceKey = "product";

  constructor() { }

  ngOnInit(): void {
  }

  getSearchValue(event: any) {
    console.log("getSearchValue.....", event);
  }

  getSelectedRows(event: any) {
    console.log("getSelectedRows.....", event);
  }

  deleteAction(deletedData: any) {
    console.log("deletedData.....", deletedData);
  }

  editAction(updateData: any) {
    console.log("updateData.....", updateData);
  }

  sortChange(event: any) {
    if (event) {
      console.log("sort Data.....", event);

    }
  }

}
