import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from "./orders.component";
import { OrderListInfoComponent } from "./order-list-info/order-list-info.component";

const routes: Routes = [
  {
    path: "",
    component: OrdersComponent,
    children: [
      {
        path: "orderlistinfo",
        component: OrderListInfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}