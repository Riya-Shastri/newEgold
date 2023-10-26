import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-order-list-info",
  templateUrl: "./order-list-info.component.html",
  styleUrls: ["./order-list-info.component.scss"],
})
export class OrderListInfoComponent implements OnInit {
  rowDetails = [
    {
      id: 1,
      depositor: "John",
      orderId: "A123",
      source: "Online",
      time: "2023-10-17 09:30 AM",
      status: "Processing",
      shippingType: "Express",
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
    },
    {
      id: 2,
      depositor: "Alice",
      orderId: "B456",
      source: "In-Store",
      time: "2023-10-16 03:45 PM",
      status: "Shipped",
      shippingType: "Standard",
      product: [
        {
          sku: "67890",
          productName: "Gadget",
          quantity: 3,
        },
      ],
    },
    {
      id: 3,
      depositor: "Bob",
      orderId: "C789",
      source: "Phone Order",
      time: "2023-10-15 11:15 AM",
      status: "Delivered",
      shippingType: "Express",
      product: [
        {
          sku: "24680",
          productName: "Doohickey",
          quantity: 2,
        },
      ],
    },
    {
      id: 4,
      depositor: "Eva",
      orderId: "D246",
      source: "In-Store",
      time: "2023-10-14 05:00 PM",
      status: "Cancelled",
      shippingType: "Standard",
      product: [
        {
          sku: "13579",
          productName: "Thingamajig",
          quantity: 1,
        },
      ],
    },
    {
      id: 5,
      depositor: "Charlie",
      orderId: "F357",
      source: "Online",
      time: "2023-10-13 10:30 AM",
      status: "Processing",
      shippingType: "Express",
      product: [
        {
          sku: "98765",
          productName: "Contraption",
          quantity: 4,
        },
      ],
    },
    {
      id: 6,
      depositor: "Grace",
      orderId: "G468",
      source: "Phone Order",
      time: "2023-10-12 01:15 PM",
      status: "Shipped",
      shippingType: "Standard",
      product: [
        {
          sku: "54321",
          productName: "Doodad",
          quantity: 2,
        },
      ],
    },
    {
      id: 7,
      depositor: "David",
      orderId: "H579",
      source: "In-Store",
      time: "2023-10-11 08:45 AM",
      status: "Delivered",
      shippingType: "Express",
      product: [
        {
          sku: "98765",
          productName: "Gizmo",
          quantity: 3,
        },
      ],
    },
    {
      id: 8,
      depositor: "Sarah",
      orderId: "I680",
      source: "Online",
      time: "2023-10-10 02:00 PM",
      status: "Processing",
      shippingType: "Express",
      product: [
        {
          sku: "54321",
          productName: "Thingummy",
          quantity: 2,
        },
      ],
    },
    {
      id: 9,
      depositor: "Frank",
      orderId: "J791",
      source: "Phone Order",
      time: "2023-10-09 04:30 PM",
      status: "Shipped",
      shippingType: "Standard",
      product: [
        {
          sku: "13579",
          productName: "Widgetron",
          quantity: 1,
        },
      ],
    },
    {
      id: 10,
      depositor: "Olivia",
      orderId: "K802",
      source: "In-Store",
      time: "2023-10-08 11:45 AM",
      status: "Delivered",
      shippingType: "Standard",
      product: [
        {
          sku: "24680",
          productName: "Gadgetron",
          quantity: 4,
        },
      ],
    },
    {
      id: 11,
      depositor: "Megan",
      orderId: "L913",
      source: "In-Store",
      time: "2023-10-07 03:00 PM",
      status: "Delivered",
      shippingType: "Express",
      product: [
        {
          sku: "86420",
          productName: "Thingamabob",
          quantity: 2,
        },
      ],
    },
    {
      id: 12,
      depositor: "James",
      orderId: "M024",
      source: "Online",
      time: "2023-10-06 10:15 AM",
      status: "Processing",
      shippingType: "Standard",
      product: [
        {
          sku: "12345",
          productName: "Whatchamacallit",
          quantity: 4,
        },
      ],
    },
    {
      id: 13,
      depositor: "Linda",
      orderId: "N135",
      source: "Phone Order",
      time: "2023-10-05 12:30 PM",
      status: "Shipped",
      shippingType: "Standard",
      product: [
        {
          sku: "67890",
          productName: "Dinglehopper",
          quantity: 3,
        },
      ],
    },
    {
      id: 14,
      depositor: "Peter",
      orderId: "O246",
      source: "In-Store",
      time: "2023-10-04 09:45 AM",
      status: "Processing",
      shippingType: "Express",
      product: [
        {
          sku: "54321",
          productName: "Widgetinator",
          quantity: 1,
        },
      ],
    },
    {
      id: 15,
      depositor: "Sophia",
      orderId: "P357",
      source: "Online",
      time: "2023-10-03 02:15 PM",
      status: "Delivered",
      shippingType: "Express",
      product: [
        {
          sku: "98765",
          productName: "Gadgetronix",
          quantity: 5,
        },
      ],
    },
    {
      id: 16,
      depositor: "Ben",
      orderId: "Q468",
      source: "Phone Order",
      time: "2023-10-02 08:30 AM",
      status: "Cancelled",
      shippingType: "Standard",
      product: [
        {
          sku: "24680",
          productName: "Doodadz",
          quantity: 2,
        },
      ],
    },
    {
      id: 17,
      depositor: "Emma",
      orderId: "R579",
      source: "In-Store",
      time: "2023-10-01 11:30 AM",
      status: "Shipped",
      shippingType: "Express",
      product: [
        {
          sku: "86420",
          productName: "Thingamajigs",
          quantity: 4,
        },
      ],
    },
    {
      id: 18,
      depositor: "Noah",
      orderId: "S680",
      source: "Online",
      time: "2023-09-30 03:45 PM",
      status: "Delivered",
      shippingType: "Standard",
      product: [
        {
          sku: "13579",
          productName: "Gizmodoodle",
          quantity: 1,
        },
      ],
    },
    {
      id: 19,
      depositor: "Ava",
      orderId: "T791",
      source: "Phone Order",
      time: "2023-09-29 05:30 PM",
      status: "Processing",
      shippingType: "Express",
      product: [
        {
          sku: "98765",
          productName: "Contraptoids",
          quantity: 3,
        },
      ],
    },
    {
      id: 20,
      depositor: "Liam",
      orderId: "U802",
      source: "In-Store",
      time: "2023-09-28 12:00 PM",
      status: "Shipped",
      shippingType: "Standard",
      product: [
        {
          sku: "86420",
          productName: "Thingummybobs",
          quantity: 2,
        },
      ],
    },
  ];

  columnHeader = [
    { name: "Depositor", sortable: true },
    { name: "Order ID", sortable: true },
    { name: "Source", sortable: true },
    { name: "Time", sortable: true },
    { name: "ShippingType", sortable: true },
    { name: "Action", sortable: true },
  ];

  actionsTypeArr = [
    { name: "edit", isShow: true, icons: "cilPencil" },
    { name: "delete", isShow: false, icons: "cilTrash" },
    { name: "save", isShow: false, icons: "cilSave" },
  ];

  settingOptionArr = [
    { name: "Dispatch", img: "Dispatch.svg" },
    { name: "Return Order", img: "Return.svg" },
    {
      name: "Print sticker",
      img: "Print sticker.svg",
    },
    {
      name: "Send Latest HJ status",
      img: "Status.svg",
    },
    { name: "Cancel order", img: "Outline.svg" },
  ];

  constructor() {}
  ngOnInit(): void {}

  getSearchValue(event: any) {
    console.log("getSearchValue.....", event);
  }
  getSelectedRows(event: any) {
    console.log("getSelectedRows.....", event);
  }
}
