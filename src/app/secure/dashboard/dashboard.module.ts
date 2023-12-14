import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TotalCardsModule } from './component/total-cards/total-cards.module';
import { OrderReportModule } from './component/order-report/order-report.module';
import { MostOrderedModule } from './component/most-ordered/most-ordered.module';
import { ProductInterface } from 'src/app/_shared/interfaces/product.interface';
import { ProductService } from 'src/app/_shared/http-service/product.service';
import { DashOrderTypeModule } from './component/dash-order-type/dash-order-type.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxSpinnerModule,
    TotalCardsModule,
    OrderReportModule,
    MostOrderedModule,
    DashOrderTypeModule
  ],
  declarations: [DashboardComponent],
  providers: [
    { provide: ProductInterface, useClass: ProductService },
  ],
})
export class DashboardModule { }
