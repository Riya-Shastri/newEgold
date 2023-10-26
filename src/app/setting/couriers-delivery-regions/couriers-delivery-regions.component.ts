import { Component, HostListener, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-couriers-delivery-regions",
  templateUrl: "./couriers-delivery-regions.component.html",
  styleUrls: ["./couriers-delivery-regions.component.scss"],
})

export class CouriersDeliveryRegionsComponent implements OnInit {
  isopen = false;

  constructor() { }

  ngOnInit(): void { }

  @HostListener("document:click", ["$event"])
  onOutsideClick(event: Event): void {
    this.setIsOpen();
  }

  setIsOpen() {
    this.isopen = !this.isopen;
  }
}
