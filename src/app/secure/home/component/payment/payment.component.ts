import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  buttons = [
    {Name:'Credit Card', Icon: 'fa-solid fa-credit-card fa-2xl'},
    {Name:'Paypal', Icon: 'fa-brands fa-paypal fa-2xl'},
    {Name:'Cash', Icon: 'fa-solid fa-wallet fa-2xl'}
  ];
  buttonSelected: string = 'Credit Card';

  @Output() letsPayment = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  getButton(buttonName: string){
    this.buttonSelected = buttonName;
  }

  closePayment(){
    this.letsPayment.emit(false);
  }

}
