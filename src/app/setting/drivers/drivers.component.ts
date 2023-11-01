import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

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
      controlType: "number",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "DriverID",
    },
    {
      columnDef: "Name",
      header: "Name",
      cell: (element: any) => `${element.Name}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "Name",
    },
    {
      columnDef: "LastName",
      header: "Last Name",
      cell: (element: any) => `${element.LastName}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "LastName",
    },
    {
      columnDef: "Phone",
      header: "Phone",
      cell: (element: any) => `${element.Phone}`,
      controlType: "number",
      isControlRequired: true,
      isValidationPattern: "[0-9]{10}",
      placeholder: "Phone",
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

  driversFrom: FormGroup;
  formControls: any = {};

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.columns1.forEach((ele: any) => {
      if (
        ele.columnDef !== "select" &&
        ele.columnDef !== "action" &&
        ele.columnDef !== "addAction"
      ) {
        if (
          ele.columnDef &&
          ele["isControlRequired"] &&
          !ele["isValidationPattern"]
        ) {
          this.formControls[ele.columnDef] = new FormControl("", [
            Validators.required,
          ]);
        } else if (
          ele.columnDef &&
          !ele["isControlRequired"] &&
          !ele["isValidationPattern"]
        ) {
          this.formControls[ele.columnDef] = new FormControl("", [
            Validators.required,
          ]);
        } else if (
          ele.columnDef &&
          ele["isControlRequired"] &&
          ele["isValidationPattern"]
        ) {
          this.formControls[ele.columnDef] = new FormControl([
            Validators.required,
            Validators.pattern(ele["isValidationPattern"]),
          ]);
        }

        this.formControls[ele.columnDef] = new FormControl(ele.defaultValue, [
          Validators.required,
        ]);
      }
    });

    console.log(this.formControls["Phone"]);
    this.driversFrom = this.formBuilder.group(this.formControls);
  }

  driversSubmit() {
    console.log(this.driversFrom.value);
  }

  sortChange(event: any) {
    if (event) {
      console.log("sort Data.....", event);
    }
  }
}
