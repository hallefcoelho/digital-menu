import { Component, OnInit } from '@angular/core';
import { NavigationInterface } from 'src/app/_shared/interfaces/navigation.interface';
import { ProductInterface } from 'src/app/_shared/interfaces/product.interface';
import { Navigation } from 'src/app/_shared/models/navigation.model';
import { Product } from 'src/app/_shared/models/product.model';
import { BudgetDataService } from 'src/app/secure/home/services/budget.data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listNavigation!: Navigation[];
  listProduct!: Product[];
  selectNavigationCategory!: Navigation;
  listProductBudget: Product[] = [];
  openPayment: boolean = false;

  constructor(
  private navigationInterface: NavigationInterface,
  private productInterface: ProductInterface,
  private budgetDataService: BudgetDataService,
  ) { }

  ngOnInit() {
    this.getDataNavigation();
    this.getDataProduct();
    this.getProductProductBudget();
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

  getProductProductBudget(){
    this.budgetDataService.productBudget$.subscribe({
      next:(products)=> {
        this.listProductBudget = products
      }
    })
  }

  letsPayment(event: boolean){
    this.openPayment = event;
    console.log(event)
  }
}
