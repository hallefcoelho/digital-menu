import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { CreditCardModule } from '../../_shared/credit-card/credit-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CustomPipesModule } from 'src/app/_shared/custom-pipes/custom-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    CreditCardModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    CustomPipesModule
  ],
  declarations: [PaymentComponent],
  exports: [PaymentComponent],
  providers: [provideNgxMask()]
})
export class PaymentModule { }
