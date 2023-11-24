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
    const index = this._productBudget.indexOf(product)
    console.log(this.productBudget)
    if(index === -1){
      const amount = product.Amount ? product.Amount : 0;
      const enteredValue = product.EnteredValue ? product.EnteredValue : 0;

      product.Amount = amount;
      product.EnteredValue = enteredValue;
      product.TotalValue = amount * enteredValue;

      this._productBudget.push(product)

      this.productBudget.next(this._productBudget);
    }

  }

  // deleteProductBudget(product){
  //   const itemRemovido = this.galleryImagesAnexoCliente.splice(index, 1)[0]; // [0] para pegar o primeiro elemento retornado
  //   this.anexoOrcamentoDeletado.push(itemRemovido);
  //   this.btnSalvar = false
  // }

  setProductBudget(productBudget: ProductBudget[]): void {
    this._productBudget = productBudget;
    this.productBudget.next(this._productBudget);
  }
}
