import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-alter-message",
  templateUrl: "./alter-message.component.html",
  styleUrls: ["./alter-message.component.scss"],
})
export class AlterMessageComponent implements OnInit {
  visible = true;
  dismissible = true;
  constructor() {}
  ngOnInit(): void {}
}
