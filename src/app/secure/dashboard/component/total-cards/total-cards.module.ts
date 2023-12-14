import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalCardsComponent } from './total-cards.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TotalCardsComponent],
  exports: [TotalCardsComponent]
})
export class TotalCardsModule { }
