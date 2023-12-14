import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/_shared/interfaces/product.interface';
import { Product } from 'src/app/_shared/models/product.model';

@Component({
  selector: 'app-most-ordered',
  templateUrl: './most-ordered.component.html',
  styleUrls: ['./most-ordered.component.scss']
})
export class MostOrderedComponent implements OnInit {
  listProduct!: Product;

  constructor() { }

  ngOnInit() {
  }

}
