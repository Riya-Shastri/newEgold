import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SettingComponent } from "./setting.component";
import { GeneralComponent } from "./general/general.component";
import { SmsNotificationsComponent } from "./sms-notifications/sms-notifications.component";
import { OversizedSkusComponent } from "./oversized-skus/oversized-skus.component";
import { DepositorSelectionComponent } from "./depositor-selection/depositor-selection.component";
import { DriversComponent } from "./drivers/drivers.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { CouriersDeliveryRegionsComponent } from "./couriers-delivery-regions/couriers-delivery-regions.component";
import { CouriersStatusMappingComponent } from "./couriers-status-mapping/couriers-status-mapping.component";

const routes: Routes = [
  {
    path: "",
    component: SettingComponent,
    children: [
      {
        path: "general",
        component: GeneralComponent,
      },
      {
        path: "sms-notifications",
        component: SmsNotificationsComponent,
      },
      {
        path: "oversized-skus",
        component: OversizedSkusComponent,
      },
      {
        path: "depositors",
        component: DepositorSelectionComponent,
      },
      {
        path: "drivers",
        component: DriversComponent,
      },
      {
        path: "user-management",
        component: UserManagementComponent,
      },
      {
        path: "couriers-delivery-regions",
        component: CouriersDeliveryRegionsComponent,
      },
      {
        path: "couriers-status-mapping",
        component: CouriersStatusMappingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
