import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostOrderedComponent } from './most-ordered.component';
import { ListMostRequestedModule } from '../../_shared/list-most-requested/list-most-requested.module';

@NgModule({
  imports: [
    CommonModule,
    ListMostRequestedModule
  ],
  declarations: [MostOrderedComponent],
  exports: [MostOrderedComponent]
})
export class MostOrderedModule { }
