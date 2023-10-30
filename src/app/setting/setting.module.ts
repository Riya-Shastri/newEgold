import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SettingRoutingModule } from "./setting-routing.module";
import { SettingComponent } from "./setting.component";
import { GeneralComponent } from "./general/general.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { OversizedSkusComponent } from "./oversized-skus/oversized-skus.component";
import { CustomComponentModule } from "../custom-component/custom-component.module";
import { SmsNotificationsComponent } from "./sms-notifications/sms-notifications.component";
import { DepositorSelectionComponent } from "./depositor-selection/depositor-selection.component";
import { DriversComponent } from "./drivers/drivers.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { CouriersDeliveryRegionsComponent } from "./couriers-delivery-regions/couriers-delivery-regions.component";
import { CouriersStatusMappingComponent } from "./couriers-status-mapping/couriers-status-mapping.component";
import { MaterialModule } from "app/material.module";
import { ThemeModule } from "app/themefolders/theme/theme.module";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [
    SettingComponent,
    GeneralComponent,
    OversizedSkusComponent,
    SmsNotificationsComponent,
    DepositorSelectionComponent,
    DriversComponent,
    UserManagementComponent,
    CouriersDeliveryRegionsComponent,
    CouriersStatusMappingComponent,
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule,
    CustomComponentModule,
    ThemeModule,
    MatMenuModule,
  ],
})
export class SettingModule {}
