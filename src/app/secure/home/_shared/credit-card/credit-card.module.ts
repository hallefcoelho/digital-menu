import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  declarations: [CreditCardComponent],
  exports: [CreditCardComponent],
  providers: [provideNgxMask()]
})
export class CreditCardModule { }
