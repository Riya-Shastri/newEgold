import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrdersRoutingModule } from "./orders-routing.module";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomComponentModule } from "../custom-component/custom-component.module";
import { OrdersComponent } from "./orders.component";
import { OrderListInfoComponent } from "./order-list-info/order-list-info.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "app/material.module";

@NgModule({
  declarations: [OrderListInfoComponent, OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    CustomComponentModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class OrdersModule {}
