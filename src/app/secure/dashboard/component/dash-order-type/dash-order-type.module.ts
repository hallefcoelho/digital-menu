import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashOrderTypeComponent } from './dash-order-type.component';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  declarations: [DashOrderTypeComponent],
  exports: [DashOrderTypeComponent]
})
export class DashOrderTypeModule { }
