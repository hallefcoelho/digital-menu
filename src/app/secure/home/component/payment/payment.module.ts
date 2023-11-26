import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { CreditCardModule } from '../../_shared/credit-card/credit-card.module';

@NgModule({
  imports: [
    CommonModule,
    CreditCardModule
  ],
  declarations: [PaymentComponent],
  exports: [PaymentComponent]
})
export class PaymentModule { }
