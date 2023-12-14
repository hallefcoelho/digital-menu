import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMostRequestedComponent } from './list-most-requested.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListMostRequestedComponent],
  exports: [ListMostRequestedComponent]
})
export class ListMostRequestedModule { }
