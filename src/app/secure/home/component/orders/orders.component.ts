import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_shared/models/product.model';
import { BudgetDataService } from 'src/app/_shared/services/budget.data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  @Input() selectedProduct!: Product;

  buttons = [{Name:'Dine In'}, {Name:'To Go'}, {Name:'Delivery'}];
  buttonSelected: string = 'Dine In';

  totalValueBudget!: number;
  @Output() letsPayment = new EventEmitter<boolean>();

  constructor(private budgetDataService: BudgetDataService) { }

  ngOnInit() {
    this.getTotalValueBudget();
  }

  getButton(buttonName: string){
    this.buttonSelected = buttonName;
  }
  getTotalValueBudget(){
    this.budgetDataService.totalValueBudget$.subscribe({
      next:(totalValueBudget)=> {
        this.totalValueBudget = totalValueBudget;
      }
    })
  }
  confirmPayment(){
    this.letsPayment.emit(true)
  }
}
