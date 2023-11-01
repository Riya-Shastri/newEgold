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
  constructor(private fb: FormBuilder) {}

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
      NDtoSDstartHH: new FormControl("", [
        Validators.required,
        Validators.min(0),
        Validators.max(23),
      ]),
      NDtoSDstartMM: new FormControl("", [
        Validators.required,
        Validators.min(0),
        Validators.max(59),
      ]),
      NDtoSDendHH: new FormControl("", [
        Validators.required,
        Validators.min(0),
        Validators.max(59),
      ]),
      NDtoSDendMM: new FormControl("", [
        Validators.required,
        Validators.min(0),
        Validators.max(59),
      ]),
      SDacceptStartHH: new FormControl("", [
        Validators.required,
        Validators.required,
        Validators.min(0),
        Validators.max(59),
      ]),
      SDacceptStartMM: new FormControl("", [
        Validators.required,
        Validators.min(0),
        Validators.max(59),
      ]),
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
