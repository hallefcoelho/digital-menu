import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { CreditCardModule } from '../../_shared/credit-card/credit-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    CreditCardModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  declarations: [PaymentComponent],
  exports: [PaymentComponent],
  providers: [provideNgxMask()]
})
export class PaymentModule { }
