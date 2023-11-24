import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationFilterComponent } from './navigation-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NavigationFilterComponent],
  exports: [NavigationFilterComponent]
})
export class NavigationFilterModule { }
