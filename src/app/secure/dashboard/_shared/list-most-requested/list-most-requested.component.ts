import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/_shared/interfaces/product.interface';
import { MostProductOrdered } from 'src/app/_shared/models/most-ordered-product.model';

@Component({
  selector: 'app-list-most-requested',
  templateUrl: './list-most-requested.component.html',
  styleUrls: ['./list-most-requested.component.scss']
})
export class ListMostRequestedComponent implements OnInit {

  listMostOrderedProduct!: MostProductOrdered[];

  constructor(
    private productInterface: ProductInterface
  ) { }

  ngOnInit() {
    this.getDataMostOrderedProduct()
  }

  getDataMostOrderedProduct() {
    this.productInterface.getMostOrderedProduct().subscribe({
      next:(products)=> {
        this.listMostOrderedProduct = products;
      }
    })
  }

}
