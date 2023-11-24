import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_shared/models/product.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  buttons = [{Name:'Dine In'}, {Name:'To Go'}, {Name:'Delivery'}];
  buttonSelected: string = 'Dine In';
  constructor() { }

  @Input() selectedProduct!: Product;

  ngOnInit() {
  }

  getButton(buttonName: string){
    this.buttonSelected = buttonName;
  }

}
