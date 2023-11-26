import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { ProductBudgetModule } from 'src/app/secure/home/component/product-budget/product-budget.module';

@NgModule({
  imports: [
    CommonModule,
    ProductBudgetModule
  ],
  declarations: [OrdersComponent],
  exports: [OrdersComponent]
})
export class OrdersModule { }
