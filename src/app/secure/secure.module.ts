import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { SidebarModule } from './core/sidebar/sidebar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecureRoutingModule } from './secure-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SecureRoutingModule,
    SidebarModule
  ],
  declarations: [SecureComponent]
})
export class SecureModule { }
