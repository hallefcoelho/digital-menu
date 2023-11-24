import { Component, OnInit } from '@angular/core';
import { NavigationInterface } from 'src/app/_shared/interfaces/navigation.interface';
import { ProductInterface } from 'src/app/_shared/interfaces/product.interface';
import { Navigation } from 'src/app/_shared/models/navigation.model';
import { Product } from 'src/app/_shared/models/product.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listNavigation!: Navigation[];
  listProduct!: Product[];
  selectNavigationCategory!: Navigation;

  constructor(
  private navigationInterface: NavigationInterface,
  private productInterface: ProductInterface) { }

  ngOnInit() {
    this.getDataNavigation();
    this.getDataProduct();
  }
  getDataNavigation() {
    this.navigationInterface.getNavigation().subscribe({
      next:(navigation)=> {
        this.listNavigation = navigation;
      }
    })
  }

  getDataProduct() {
    this.productInterface.getProduct().subscribe({
      next:(product)=> {
        this.listProduct = product;
      }
    })
  }

  selectedNavigation(event: Navigation){
    this.selectNavigationCategory = event;
  }

}
