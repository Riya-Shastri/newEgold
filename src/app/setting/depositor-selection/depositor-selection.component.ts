import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-depositor-selection",
  templateUrl: "./depositor-selection.component.html",
  styleUrls: ["./depositor-selection.component.scss"],
})
export class DepositorSelectionComponent implements OnInit {
  columnHeader = [
    { name: "Depositor Id", sortable: false },
    { name: "Name", sortable: false },
    { name: "eGold Code", sortable: false },
    { name: "SD", sortable: false },
  ];
  rowDetails = [
    {
      depositorId: "10",
      name: "Widget",
      eGoldCode: "210",
      sd: "text",
    },
    {
      depositorId: "10",
      name: "Widget",
      eGoldCode: "210",
      sd: "text",
    },
    {
      depositorId: "10",
      name: "Widget",
      eGoldCode: "210",
      sd: "text",
    },
    {
      depositorId: "10",
      name: "Widget",
      eGoldCode: "210",
      sd: "text",
    },
    {
      depositorId: "10",
      name: "Widget",
      eGoldCode: "210",
      sd: "text",
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
