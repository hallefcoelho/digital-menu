import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderReportComponent } from './order-report.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderReportComponent],
  exports: [OrderReportComponent]
})
export class OrderReportModule { }
