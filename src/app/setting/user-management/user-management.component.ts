import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.scss"],
})
export class UserManagementComponent implements OnInit {
  totalOrderRecords = 20;

  sourceOptions = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
  ];

  columns1 = [
    {
      columnDef: "UserID",
      header: "User ID",
      cell: (element: any) => `${element.UserID}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "User ID",
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
      columnDef: "Depositor",
      header: "Depositor",
      cell: (element: any) => `${element.Depositor}`,
      controlType: "text",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "Depositor",
    },
    {
      columnDef: "Email",
      header: "Email",
      cell: (element: any) => `${element.Email}`,
      controlType: "email",
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "Email",
    },
    {
      columnDef: "Role",
      header: "Role",
      cell: (element: any) => `${element.Role}`,
      controlType: "select",
      sourceOptions: this.sourceOptions,
      isControlRequired: true,
      isValidationPattern: null,
      placeholder: "Role",
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

  userManagementForm: FormGroup;
  formControls: any = {};

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initalForm();
  }

  initalForm() {
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

    console.log(this.formControls);

    this.userManagementForm = this.formBuilder.group(this.formControls);
  }

  userManagementSubmit() {
    console.log(this.userManagementForm.value);
  }

  sortChange(event: any) {
    if (event) {
      console.log("sort Data.....", event);
    }
  }
}
