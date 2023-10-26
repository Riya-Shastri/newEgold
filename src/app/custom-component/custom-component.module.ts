import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonTableComponent } from "./common-table/common-table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { AlterMessageComponent } from "./alter-message/alter-message.component";

@NgModule({
  declarations: [CommonTableComponent, AlterMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    CommonTableComponent,
    AlterMessageComponent
  ],
})
export class CustomComponentModule { }
