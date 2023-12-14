import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavigationFilterModule } from 'src/app/_shared/components/navigation-filter/navigation-filter.module';
import { NavigationInterface } from 'src/app/_shared/interfaces/navigation.interface';
import { NavigationService } from 'src/app/_shared/http-service/navigation.service';
import { ProductCardModule } from 'src/app/_shared/components/product-card/product-card.module';
import { OrdersModule } from './component/orders/orders.module';
import { ProductService } from 'src/app/_shared/http-service/product.service';
import { ProductInterface } from 'src/app/_shared/interfaces/product.interface';
import { PaymentModule } from './component/payment/payment.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavigationFilterModule,
    ProductCardModule,
    OrdersModule,
    PaymentModule,
    NgxSpinnerModule
  ],
  declarations: [HomeComponent],
  providers: [
    { provide: NavigationInterface, useClass: NavigationService },
    { provide: ProductInterface, useClass: ProductService },
  ],
})
export class HomeModule { }
