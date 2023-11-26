import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../../_shared/models/product.model';
import { ProductBudget } from '../../../_shared/models/productBudget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetDataService {

  private _productBudget: ProductBudget[] = [];
  productBudget = new BehaviorSubject<ProductBudget[]>(this._productBudget);
  productBudget$ = this.productBudget.asObservable();

  private _totalValueBudget: number = 0;
  totalValueBudget = new BehaviorSubject<number>(this._totalValueBudget);
  totalValueBudget$ = this.totalValueBudget.asObservable();


  constructor() { }

  addProductBudget(product: ProductBudget): void {
    const isProductInBudget = this._productBudget.some(item => item.Id === product.Id);

    if (!isProductInBudget) {
      const amount = product.Amount || 1;
      const enteredValue = product.EnteredValue || 0;
      const orderNote = product.OrderNote || '';

      product.OrderNote = orderNote;
      product.Amount = amount;
      product.EnteredValue = enteredValue;
      product.TotalValue = amount * enteredValue;
      this._productBudget.push(product);

      this.productBudget.next([...this._productBudget]);
    }
  }

  deleteProductBudget(product: Product | any){
    const productRemoved = this._productBudget.find(x => x.Id == product.Id);
    console.log(productRemoved)
    productRemoved!.OrderNote = '';
    productRemoved!.Amount = 1;
    productRemoved!.EnteredValue = product.EnteredValue;
    productRemoved!.TotalValue = product.EnteredValue;

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

  setTotalValueBudget(totalValueBudget: number): void{
    this._totalValueBudget = totalValueBudget;
    this.totalValueBudget.next(this._totalValueBudget);
  }
}
