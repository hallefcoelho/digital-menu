import { AppComponent } from './../../../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
  styleUrls: ['./order-report.component.scss']
})
export class OrderReportComponent implements OnInit {
  orderReporList: any =[
    {
      id: 1,
      Customer: 'Eren Jaegar',
      Menu: 'Spicy seasoned seafood noodles',
      TotalPayment: 125,
      Status: 'Completed',
      Avatar: './assets/avatar/img1.png'
    },
    {
      id: 2,
      Customer: 'Reiner Braunn',
      Menu: 'Salted Pasta with mushroom sauce',
      TotalPayment: 145,
      Status: 'Preparing',
      Avatar: './assets/avatar/img2.png'
    },
    {
      id: 3,
      Customer: 'Levi Ackerman',
      Menu: 'Beef dumpling in hot and sour soup',
      TotalPayment: 105,
      Status: 'Pending',
      Avatar: './assets/avatar/img3.png'
    },
    {
      id: 4,
      Customer: 'Historia Reiss',
      Menu: 'Hot spicy fried rice with omelet',
      TotalPayment: 45,
      Status: 'Completed',
      Avatar: './assets/avatar/img4.png'
    },
    {
      id: 5,
      Customer: 'Hanji Zoe',
      Menu: 'Hot spicy fried rice with omelet',
      TotalPayment: 245,
      Status: 'Completed',
      Avatar: './assets/avatar/img5.png'
    },
    {
      id: 6,
      Customer: 'Armin Arlert',
      Menu: 'Hot spicy fried rice with omelet',
      TotalPayment: 435,
      Status: 'Completed',
      Avatar: './assets/avatar/img6.png'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
