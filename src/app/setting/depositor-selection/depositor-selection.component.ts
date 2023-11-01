import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-depositor-selection",
  templateUrl: "./depositor-selection.component.html",
  styleUrls: ["./depositor-selection.component.scss"],
})
export class DepositorSelectionComponent implements OnInit {
  totalOrderRecords = 20;

  columns1 = [
    {
      columnDef: "DepositorId",
      header: "Depositor Id",
      cell: (element: any) => `${element.DepositorId}`,
    },
    {
      columnDef: "Name",
      header: "Name",
      cell: (element: any) => `${element.Name}`,
    },
    {
      columnDef: "eGoldCode",
      header: "eGold Code",
      cell: (element: any) => `${element.eGoldCode}`,
    },
    {
      columnDef: "SD",
      header: "SD",
      cell: (element: any) => `${element.SD}`,
    },
  ];

  dataSource1 = [
    {
      DepositorId: "10",
      Name: "Widget",
      eGoldCode: "210",
      SD: "text",
    },
    {
      DepositorId: "10",
      Name: "Widget",
      eGoldCode: "210",
      SD: "text",
    },
    {
      DepositorId: "10",
      Name: "Widget",
      eGoldCode: "210",
      SD: "text",
    },
    {
      DepositorId: "10",
      Name: "Widget",
      eGoldCode: "210",
      SD: "text",
    },
    {
      DepositorId: "10",
      Name: "Widget",
      eGoldCode: "210",
      SD: "text",
    },
  ];

  isOpen: any = false;

  constructor() {}
  ngOnInit(): void {}

  setOpen() {
    console.log("Call event...");
    this.isOpen = !this.isOpen;
  }

  sortChange(event: any) {
    if (event) {
      console.log("sort Data.....", event);
    }
  }
}
