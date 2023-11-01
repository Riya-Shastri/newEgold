import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AlertDialogBoxComponent } from "app/custom-component/alert-dialog-box/alert-dialog-box.component";
import { AlterMessageComponent } from "app/custom-component/alter-message/alter-message.component";
// import { ToastService } from "app/services/toast.service";

@Component({
  selector: "app-couriers-status-mapping",
  templateUrl: "./couriers-status-mapping.component.html",
  styleUrls: ["./couriers-status-mapping.component.scss"],
})
export class CouriersStatusMappingComponent implements OnInit {
  constructor(
    // private snackbar: ToastService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openSnackBar() {
    this.openSnackBars(
      "Hello This is Successfully......!!!",
      "success-snackbar",
      "close",
      "checkCircle.svg"
    );
    // this.snackbar.showSnackBar("Hello", 1000, "right");
    // this._snackBar.openFromComponent(AlterMessageComponent);
  }

  openSnackBars(message: string, panelClass: string, icon: string, img: any) {
    this._snackBar.openFromComponent(AlterMessageComponent, {
      data: {
        message: message,
        action: icon,
        img: img,
      },
      panelClass: panelClass,
      duration: 10000,
      verticalPosition: "top",
      horizontalPosition: "right",
    });
  }

  openDialog() {
    this.dialog.open(AlertDialogBoxComponent, {
      data: {
        message: "success",
      },
    });
  }
}
