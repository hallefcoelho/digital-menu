import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    {Name:'Paypal', Icon: 'fa-brands fa-paypal fa-2xl'},
    {Name:'Cash', Icon: 'fa-solid fa-wallet fa-2xl'}
  ];
  formPayment!: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createdFormPayment();
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
  teste(){
    console.log(this.formPayment.controls['nameCard'].value)

  }

}
