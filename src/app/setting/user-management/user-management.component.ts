import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.scss"],
})
export class UserManagementComponent implements OnInit {
  totalOrderRecords = 20;

  columns1 = [
    {
      columnDef: "UserID",
      header: "User ID",
      cell: (element: any) => `${element.UserID}`,
    },
    {
      columnDef: "Name",
      header: "Name",
      cell: (element: any) => `${element.Name}`,
    },
    {
      columnDef: "Depositor",
      header: "Depositor",
      cell: (element: any) => `${element.Depositor}`,
    },
    {
      columnDef: "Email",
      header: "Email",
      cell: (element: any) => `${element.Email}`,
    },
    {
      columnDef: "Role",
      header: "Role",
      cell: (element: any) => `${element.Role}`,
    },
    // {
    //   columnDef: "Action",
    //   header: "Action",
    //   cell: (element: any) => `${element.Action}`,
    // },
  ];

  dataSource1 = [
    {
      UserID: "1",
      Name: "Widget",
      Depositor: "10",
      Email: "widget@example.com",
      Role: "Admin",
    },
    {
      UserID: "2",
      Name: "Gadget",
      Depositor: "20",
      Email: "gadget@example.com",
      Role: "User",
    },
    {
      UserID: "3",
      Name: "Doodad",
      Depositor: "30",
      Email: "doodad@example.com",
      Role: "User",
    },
    {
      UserID: "4",
      Name: "Contraption",
      Depositor: "40",
      Email: "contraption@example.com",
      Role: "User",
    },
    {
      UserID: "5",
      Name: "Thingamajig",
      Depositor: "50",
      Email: "thingamajig@example.com",
      Role: "User",
    },
    {
      UserID: "6",
      Name: "Whatchamacallit",
      Depositor: "60",
      Email: "whatchamacallit@example.com",
      Role: "User",
    },
    {
      UserID: "7",
      Name: "Doohickey",
      Depositor: "70",
      Email: "doohickey@example.com",
      Role: "User",
    },
    {
      UserID: "8",
      Name: "Gizmo",
      Depositor: "80",
      Email: "gizmo@example.com",
      Role: "User",
    },
    {
      UserID: "9",
      Name: "Wrench",
      Depositor: "90",
      Email: "wrench@example.com",
      Role: "User",
    },
    {
      UserID: "10",
      Name: "Hammer",
      Depositor: "100",
      Email: "hammer@example.com",
      Role: "User",
    },
  ];

  actionsTypeArr = [{ name: "edit", isShow: true, icons: "cilPencil" }];

  constructor() {}
  ngOnInit(): void {}

  sortChange(event: any) {
    if (event) {
      console.log("sort Data.....", event);
    }
  }
}
