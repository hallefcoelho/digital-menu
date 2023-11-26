import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  @Input() ccvSelected!: boolean;
  @Input() nameCard!: string;
  @Input() numberCard!: any;
  @Input() ccvCard!: number;
  @Input() dateValidationCard!: any;

  constructor() { }

  ngOnInit() {
  }

}
