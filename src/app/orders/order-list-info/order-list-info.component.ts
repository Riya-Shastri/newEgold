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
    { name: "edit", isShow: true, icons: "cilPencil" },
    { name: "delete", isShow: false, icons: "cilTrash" },
    { name: "save", isShow: false, icons: "cilSave" },
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

  columns: MtxGridColumn[] = [
    {
      header: 'Depositor',
      field: 'Depositor',
      sortable: true,
      minWidth: 100,
      width: '100px',
    },
    {
      header: 'Order ID',
      field: 'OrderID',
      sortable: true,
      disabled: true,
      minWidth: 100,
      width: '100px',
    },
    {
      header: 'Source',
      field: 'Source',
      minWidth: 100,
    },
    {
      header: 'Time',
      field: 'Time',
      minWidth: 100,
    },
    {
      header: 'ShippingType',
      field: 'ShippingType',
      minWidth: 100,
    },
    // {
    //   header: 'Action',
    //   field: 'action',
    //   minWidth: 140,
    //   width: '140px',
    //   pinned: 'right',
    //   type: 'button',
    //   buttons: [
    //     {
    //       type: 'icon',
    //       icon: 'edit',
    //       tooltip: 'Edit',
    //       click: (record: any) => this.editAction(record),
    //     },
    //     {
    //       type: 'icon',
    //       color: 'warn',
    //       icon: 'delete',
    //       tooltip: 'Delete',
    //       click: (record: any) => this.deleteAction(record),
    //     },
    //   ],
    // },
  ];

  dataSource = [
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
      Action: ''
    },
    {
      Depositor: 'Hydrogen',
      OrderID: '1607926887075',
      Source: 'www.matero.com',
      Time: '010-12345678',
      ShippingType: 'matero',
      Action: ''
    },
  ]

  columns1 = [
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
    // {
    //   columnDef: 'action',
    //   header: 'Action',
    //   cell: (element: any) => `${element.Action}`,
    // }
  ];

  dataSource1 = [
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
