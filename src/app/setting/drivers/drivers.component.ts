import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-drivers",
  templateUrl: "./drivers.component.html",
  styleUrls: ["./drivers.component.scss"],
})
export class DriversComponent implements OnInit {
  columnHeader = [
    { name: "Driver ID", sortable: false },
    { name: "Name", sortable: false },
    { name: "Last name", sortable: false },
    { name: "Phone", sortable: false },
  ];
  rowDetails = [
    {
      driverId: "10",
      name: "Widget",
      lastName: "Text",
      phone: "987456321",
    },
    {
      driverId: "10",
      name: "Widget",
      lastName: "Text",
      phone: "987456321",
    },
    {
      driverId: "10",
      name: "Widget",
      lastName: "Text",
      phone: "987456321",
    },

    {
      driverId: "10",
      name: "Widget",
      lastName: "Text",
      phone: "987456321",
    },
    {
      driverId: "10",
      name: "Widget",
      lastName: "Text",
      phone: "987456321",
    },
    {
      driverId: "10",
      name: "Widget",
      lastName: "Text",
      phone: "987456321",
    },

    {
      driverId: "10",
      name: "Widget",
      lastName: "Text",
      phone: "987456321",
    },
    {
      driverId: "10",
      name: "Widget",
      lastName: "Text",
      phone: "987456321",
    },
    {
      driverId: "10",
      name: "Widget",
      lastName: "Text",
      phone: "987456321",
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
