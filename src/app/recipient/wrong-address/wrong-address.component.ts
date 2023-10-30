import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-wrong-address",
  templateUrl: "./wrong-address.component.html",
  styleUrls: ["./wrong-address.component.scss"],
})
export class WrongAddressComponent implements OnInit {
  wrongAddress: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.wrongAddress = this.formBuilder.group({
      fullName: new FormControl("", [Validators.required]),
      mobilePhone: new FormControl("", [Validators.required]),
      streetHouseNum: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      notesMessenger: new FormControl("", [Validators.required]),
    });
  }

  wrongAddressSubmit() {
    console.log(this.wrongAddress.value);
  }
}
