import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.scss"],
})
export class UserManagementComponent implements OnInit {
  columnHeader = [
    { name: "User ID", sortable: false },
    { name: "Name", sortable: false },
    { name: "Depositor", sortable: false },
    { name: "Email", sortable: false },
    { name: "Role", sortable: false },
    { name: "Action", sortable: false },
  ];
  rowDetails = [
    {
      userId: "1",
      name: "Widget",
      depositor: "10",
      email: "Widget",
      role: "10",
    },
    {
      userId: "1",
      name: "Widget",
      depositor: "10",
      email: "Widget",
      role: "10",
    },
    {
      userId: "1",
      name: "Widget",
      depositor: "10",
      email: "Widget",
      role: "10",
    },
    {
      userId: "1",
      name: "Widget",
      depositor: "10",
      email: "Widget",
      role: "10",
    },
    {
      userId: "1",
      name: "Widget",
      depositor: "10",
      email: "Widget",
      role: "10",
    },
    {
      userId: "1",
      name: "Widget",
      depositor: "10",
      email: "Widget",
      role: "10",
    },
    {
      userId: "1",
      name: "Widget",
      depositor: "10",
      email: "Widget",
      role: "10",
    },
    {
      userId: "1",
      name: "Widget",
      depositor: "10",
      email: "Widget",
      role: "10",
    },
    {
      userId: "1",
      name: "Widget",
      depositor: "10",
      email: "Widget",
      role: "10",
    },
  ];
  actionsTypeArr = [{ name: "edit", isShow: true, icons: "cilPencil" }];

  constructor() {}
  ngOnInit(): void {}
}
