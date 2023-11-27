import { NgModule } from '@angular/core';
import { InstallmentsPipe } from './installments.pipe';

@NgModule({
  declarations: [
    InstallmentsPipe
   ],
  exports: [
    InstallmentsPipe
  ]
})
export class CustomPipesModule { }
