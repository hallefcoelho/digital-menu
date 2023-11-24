import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBudgetComponent } from './product-budget.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ProductBudgetComponent],
  exports: [ProductBudgetComponent]
})
export class ProductBudgetModule { }
