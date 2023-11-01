import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-drivers",
  templateUrl: "./drivers.component.html",
  styleUrls: ["./drivers.component.scss"],
})
export class DriversComponent implements OnInit {
  totalOrderRecords = 20;

  columns1 = [
    {
      columnDef: "DriverID",
      header: "Driver ID",
      cell: (element: any) => `${element.DriverID}`,
    },
    {
      columnDef: "Name",
      header: "Name",
      cell: (element: any) => `${element.Name}`,
    },
    {
      columnDef: "LastName",
      header: "Last Name",
      cell: (element: any) => `${element.LastName}`,
    },
    {
      columnDef: "Phone",
      header: "Phone",
      cell: (element: any) => `${element.Phone}`,
    },
  ];

  dataSource1 = [
    {
      DriverID: "10",
      Name: "Widget",
      LastName: "Text",
      Phone: "987456321",
    },
    {
      DriverID: "20",
      Name: "Gadget",
      LastName: "Sample",
      Phone: "123456789",
    },
    {
      DriverID: "30",
      Name: "Doodad",
      LastName: "Example",
      Phone: "555555555",
    },
    {
      DriverID: "40",
      Name: "Contraption",
      LastName: "Demo",
      Phone: "111111111",
    },
    {
      DriverID: "50",
      Name: "Thingamajig",
      LastName: "Test",
      Phone: "777777777",
    },
    {
      DriverID: "60",
      Name: "Whatchamacallit",
      LastName: "Try",
      Phone: "888888888",
    },
    {
      DriverID: "70",
      Name: "Doohickey",
      LastName: "Check",
      Phone: "999999999",
    },
    {
      DriverID: "80",
      Name: "Gizmo",
      LastName: "Verify",
      Phone: "666666666",
    },
    {
      DriverID: "90",
      Name: "Gizmos and Gadgets",
      LastName: "Review",
      Phone: "444444444",
    },
    {
      DriverID: "100",
      Name: "Tech Wizard",
      LastName: "Inspect",
      Phone: "222222222",
    },
  ];

  constructor() {}
  ngOnInit(): void {}

  sortChange(event: any) {
    if (event) {
      console.log("sort Data.....", event);
    }
  }
}
