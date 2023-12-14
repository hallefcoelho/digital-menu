import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BudgetDataService } from '../../services/budget.data.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Output() letsPayment = new EventEmitter<boolean>();
  ccvSelected: boolean = false;
  buttonSelected: string = 'Credit Card';
  buttons = [
    {Name:'Credit Card', Icon: 'fa-solid fa-credit-card fa-2xl'},
    {Name:'Pix', Icon: 'fa-brands fa-pix fa-2xl'},
    // {Name:'Cash', Icon: 'fa-solid fa-wallet fa-2xl'}
  ];

  totalValueBudget!: number;

  formPayment!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private budgetDataService: BudgetDataService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.createdFormPayment();
    this.getTotalValueBudget();
  }

  createdFormPayment(){
    this.formPayment = this.fb.group({
      nameCard: [''],
      numberCard: [''],
      dateCard: [''],
      ccvCard: ['']
    })
  }

  getButton(buttonName: string){
    this.buttonSelected = buttonName;
  }

  closePayment(){
    this.letsPayment.emit(false);
  }

  ccvSelect(select: boolean){
    this.ccvSelected = select;
  }

  getTotalValueBudget(){
    this.budgetDataService.totalValueBudget$.subscribe({
      next:(totalValueBudget)=> {
        this.totalValueBudget = totalValueBudget;
      }
    })
  }

  confirmBudget(){
    this.spinner.show();
    setTimeout(() => {
      this.toastr.success('Budget confirmed successfully', 'Sucess');
      this.budgetDataService.setProductBudget([])
      this.letsPayment.emit(false);
      this.spinner.hide();
    }, 2000);
  }

}
