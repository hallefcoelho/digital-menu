import { ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../_shared/models/product.model';
import { BudgetDataService } from '../../services/budget.data.service';
import { ProductBudget } from '../../../../_shared/models/productBudget.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-budget',
  templateUrl: './product-budget.component.html',
  styleUrls: ['./product-budget.component.scss']
})
export class ProductBudgetComponent implements OnInit, DoCheck {
  listProductFilter!: ProductBudget[];
  formProduct!: FormGroup;

  constructor(
    private budgetDataService: BudgetDataService,
    private fb: FormBuilder,
    private cdref: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.getProductProductBudget();
  }
  ngDoCheck(): void {
    this.cdref.detectChanges();
    this.setTotalValueBudget();
  }
  getProductProductBudget(){
    this.budgetDataService.productBudget$.subscribe({
      next:(products)=> {
        this.listProductFilter = products;
      }
    });
  }
  deleteProductBudget(product: Product){
    this.budgetDataService.deleteProductBudget(product);
  }
  setTotalValueBudget(){
    this.budgetDataService.setTotalValueBudget(this.listProductFilter.reduce((sum, item) => sum + (item.Amount * item.Price), 0));
  }
}
