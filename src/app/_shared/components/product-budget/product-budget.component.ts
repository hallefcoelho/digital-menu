import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { BudgetDataService } from '../../services/budget.data.service';
import { ProductBudget } from '../../models/productBudget.model';

@Component({
  selector: 'app-product-budget',
  templateUrl: './product-budget.component.html',
  styleUrls: ['./product-budget.component.scss']
})
export class ProductBudgetComponent implements OnInit {
  listProductFilter!: ProductBudget[]

  constructor(private budgetDataService: BudgetDataService) { }

  ngOnInit() {
    this.getProductProductBudget();
  }
  getProductProductBudget(){
    this.budgetDataService.productBudget$.subscribe({
      next:(products)=> {
        this.listProductFilter = products
      }
    })
  }
  deleteProductBudget(product: Product){
    this.budgetDataService.deleteProductBudget(product)
  }

}
