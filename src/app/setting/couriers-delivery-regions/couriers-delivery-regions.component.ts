import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "app-couriers-delivery-regions",
  templateUrl: "./couriers-delivery-regions.component.html",
  styleUrls: ["./couriers-delivery-regions.component.scss"],
})
export class CouriersDeliveryRegionsComponent implements OnInit {
  isopen = false;
  metMenuArr = [
    {
      name: "Same Day deliveries",
      isOpen: false,
      options: [
        {
          opt: "Text",
        },
        {
          opt: "Item-1",
        },
        {
          opt: "Item-2",
        },
        {
          opt: "Item-3",
        },
        {
          opt: "Item-4",
        },
      ],
    },
    {
      name: "Next Day deliveries",
      isOpen: false,
      options: [
        {
          opt: "Text",
        },
        {
          opt: "Item-1",
        },
        {
          opt: "Item-2",
        },
        {
          opt: "Item-3",
        },
        {
          opt: "Item-4",
        },
      ],
    },
    {
      name: "Locker deliveries",
      isOpen: false,
      options: [
        {
          opt: "Text",
        },
        {
          opt: "Item-1",
        },
        {
          opt: "Item-2",
        },
        {
          opt: "Item-3",
        },
        {
          opt: "Item-4",
        },
      ],
    },
  ];

  @ViewChild(MatMenuTrigger) menu: MatMenuTrigger;

  constructor() {}

  ngOnInit(): void {
    console.log("Mat Memu...", this.menu);
  }

  @HostListener("document:click", ["$event"])
  onOutsideClick(event: Event): void {
    console.log("Mat Memu...", this.menu);
    // this.setIsOpen();
  }

  setIsOpen() {
    this.isopen = !this.isopen;
  }
}
