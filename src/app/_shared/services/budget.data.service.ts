import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductBudget } from '../models/productBudget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetDataService {

  private _productBudget: ProductBudget[] = [];
  productBudget = new BehaviorSubject<ProductBudget[]>(this._productBudget);
  productBudget$ = this.productBudget.asObservable();


  constructor() { }

  addProductBudget(product: ProductBudget): void {
    const isProductInBudget = this._productBudget.some(item => item.Id === product.Id);

    if (!isProductInBudget) {
      const amount = product.Amount || 0;
      const enteredValue = product.EnteredValue || 0;

      product.Amount = amount;
      product.EnteredValue = enteredValue;
      product.TotalValue = amount * enteredValue;
      this._productBudget.push(product);

      this.productBudget.next([...this._productBudget]);
    }
  }

  deleteProductBudget(product: Product){
    const productRemoved = this._productBudget.find(x => x.Id == product.Id);
    if(productRemoved) {
        const index = this._productBudget.indexOf(productRemoved);
        this._productBudget.splice(index, 1);
        this.productBudget.next(this._productBudget);
    }
  }

  setProductBudget(productBudget: ProductBudget[]): void {
    this._productBudget = productBudget;
    this.productBudget.next(this._productBudget);
  }
}
