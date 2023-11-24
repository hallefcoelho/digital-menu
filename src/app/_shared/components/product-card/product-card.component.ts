import { ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { Navigation } from '../../models/navigation.model';
import { BudgetDataService } from '../../services/budget.data.service';
import { ProductBudget } from '../../models/productBudget.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements DoCheck {
  @Input() listProduct!: Product[];
  @Input() selectNavigationCategory!: Navigation;
  @Output() selected = new EventEmitter<any>();
  selectedProduct!: Product;
  listProductFilter!: Product[];

  constructor(
    private cdref: ChangeDetectorRef,
    private budgetDataService: BudgetDataService
    ) { }

  ngDoCheck(): void {
    this.cdref.detectChanges();
    this.categoryByFilter();
  }

  categoryByFilter(){
    this.listProductFilter = this.listProduct.filter(x => x.Category === this.selectNavigationCategory.Name)
  }

  addProductBudget(product: ProductBudget | any){
    this.budgetDataService.addProductBudget(product)
  }

}
