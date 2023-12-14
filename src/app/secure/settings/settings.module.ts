import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ColorPickerModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
