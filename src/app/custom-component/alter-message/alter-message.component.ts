import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBar,
  MatSnackBarRef,
} from "@angular/material/snack-bar";

@Component({
  selector: "app-alter-message",
  templateUrl: "./alter-message.component.html",
  styleUrls: ["./alter-message.component.scss"],
})
export class AlterMessageComponent implements OnInit {
  constructor(
    public snackBarRef: MatSnackBarRef<AlterMessageComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  // openSnackBar(message?: any, action?: string) {
  //   this._snackBar.open(message, action, {
  //     horizontalPosition: "right",
  //     verticalPosition: "top",
  //     duration: 1000,
  //   });
  // }
}
