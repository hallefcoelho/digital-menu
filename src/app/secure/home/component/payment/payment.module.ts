import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { CreditCardModule } from '../../_shared/credit-card/credit-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CreditCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [PaymentComponent],
  exports: [PaymentComponent]
})
export class PaymentModule { }
