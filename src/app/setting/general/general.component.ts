import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";


@Component({
  selector: "app-general",
  templateUrl: "./general.component.html",
  styleUrls: ["./general.component.scss"],
})
export class GeneralComponent implements OnInit {
  generalSettings: FormGroup;
  generalOTFrames: FormGroup;

  // time = { hour: 0, minute: 0 };
  // time: NgbTimeStruct = {
  //   hour: null,
  //   minute: null,
  //   second: 0,
  // };
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.intialSettingsForm();
    this.intialOTFrames();
  }

  intialSettingsForm() {
    this.generalSettings = this.fb.group({
      changeSDtoND: new FormControl(false),
      dimTolerance: new FormControl("", [Validators.required]),
      emailSosna: new FormControl("", [Validators.required]),
      emailCheetah: new FormControl("", [Validators.required]),
      emailFlyingCargo: new FormControl("", [Validators.required]),
      mailKatz: new FormControl("", [Validators.required]),
      dispatchAlertEmail: new FormControl("", [Validators.required]),
    });
  }

  intialOTFrames() {
    this.generalOTFrames = this.fb.group({
      NDtoSDstart: new FormControl('', [Validators.required]),
      NDtoSDend: new FormControl('', [Validators.required]),
      SDacceptStart: new FormControl('', [Validators.required]),
    });
  }

  settingSubmit() {
    console.log(this.generalSettings.value);
  }

  OTframeSubmit() {
    console.log(this.generalOTFrames.value);
  }
}

// NDtoSDStartHH: new FormControl("", [Validators.required]),
// NDtoSDStartMM: new FormControl("", [Validators.required]),
// NDtoSDEndtHH: new FormControl("", [Validators.required]),
// NDtoSDEndtMM: new FormControl("", [Validators.required]),
// SDAcceptTimeHH: new FormControl("", [Validators.required]),
// SDAcceptTimeMM: new FormControl("", [Validators.required]),
