import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBudgetComponent } from './product-budget.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe

  ],
  declarations: [ProductBudgetComponent],
  exports: [ProductBudgetComponent],
  providers: [provideNgxMask()],

})
export class ProductBudgetModule { }
