import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-sms-notifications",
  templateUrl: "./sms-notifications.component.html",
  styleUrls: ["./sms-notifications.component.scss"],
})
export class SmsNotificationsComponent implements OnInit {

  rowDetails = [
    {
      id: 1,
      name: "John",
      contentTemplate: "A1",
      baseLength: "Online",
    },
    {
      id: 2,
      name: "John",
      contentTemplate: "A2",
      baseLength: "Online",
    },
    {
      id: 3,
      name: "John",
      contentTemplate: "A3",
      baseLength: "Online",
    },
    {
      id: 4,
      name: "John",
      contentTemplate: "A4",
      baseLength: "Online",
    },
    {
      id: 5,
      name: "John",
      contentTemplate: "A5",
      baseLength: "Online",
    },
  ];
  columnHeader = [
    { name: "Name", sortable: false },
    { name: "Content Template", sortable: false },
    { name: "Base Length", sortable: false },
    { name: "Action", sortable: false },
  ];
  actionsTypeArr = [
    { name: "edit", isShow: true, icons: "cilPencil" },
    // { name: "delete", isShow: false, icons: "cilTrash" },
    // { name: "save", isShow: false, icons: "cilSave" },
  ];
  settingOptionArr = [
    { name: "edit", icons: "cilPencil" },
    { name: "delete", icons: "cilPencil" },
  ];

  smsNotification: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.smsNotification = this.fb.group({
      name: new FormControl("", [Validators.required]),
      contentTemplate: new FormControl("", [Validators.required]),
      baseLength: new FormControl("", [Validators.required]),
    });
  }
}
