import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonTableComponent } from "./common-table/common-table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { AlterMessageComponent } from "./alter-message/alter-message.component";
import { MaterialModule } from "app/material.module";
import { SharedModule } from "app/themefolders/shared";
import { AlertDialogBoxComponent } from "./alert-dialog-box/alert-dialog-box.component";
import { CdkDrag, CdkDropList, DragDropModule } from "@angular/cdk/drag-drop";
import { CommonChildTableComponent } from './common-child-table/common-child-table.component';


@NgModule({
  declarations: [
    CommonTableComponent,
    AlterMessageComponent,
    AlertDialogBoxComponent,
    CommonChildTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule,
    SharedModule,
    CdkDropList,
    CdkDrag,
    DragDropModule
  ],
  exports: [
    CommonTableComponent,
    AlterMessageComponent,
    AlertDialogBoxComponent
  ],
})
export class CustomComponentModule { }
