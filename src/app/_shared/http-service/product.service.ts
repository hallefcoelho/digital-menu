import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements ProductInterface {

constructor() { }

  getProduct(): Observable<Product[]>{
    return new Observable(observer => {
      return  observer.next([
        {
          Id: 1,
          Description: 'Spicy seasoned seafood noodles',
          Sale: 2.29,
          Availability: 20,
          Image: '../../../../assets/cards/Images12.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 2,
          Description: 'Salted Pasta with mushroom sauce',
          Sale: 2.69,
          Availability: 11,
          Image: '../../../../assets/cards/Images42.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 3,
          Description: 'Beef dumpling in hot and sour soup',
          Sale: 2.99,
          Availability: 16,
          Image: '../../../../assets/cards/Images13.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 4,
          Description: 'Healthy noodle with spinach leaf',
          Sale: 3.29,
          Availability: 22,
          Image: '../../../../assets/cards/Images10.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 5,
          Description: 'Hot spicy fried rice with omelet',
          Sale: 3.49,
          Availability: 13,
          Image: '../../../../assets/cards/Images.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 6,
          Description: 'Spicy instant noodle with special omelette',
          Sale: 3.59,
          Availability: 17,
          Image: '../../../../assets/cards/Images9.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 7,
          Description: 'Healthy noodle with spinach leaf',
          Sale: 4.28,
          Availability: 30,
          Image: '../../../../assets/cards/Images6.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 8,
          Description: 'Salted Pasta with mushroom sauce',
          Sale: 2.99,
          Availability: 25,
          Image: '../../../../assets/cards/Images15.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 9,
          Description: 'is simply dummy text of the printing.',
          Sale: 3.59,
          Availability: 20,
          Image: '../../../../assets/cards/prato-frio-1.png',
          Category: 'Cold Dishes'
        },
        {
          Id: 10,
          Description: 'but also the leap into electronic.',
          Sale: 2.69,
          Availability: 10,
          Image: '../../../../assets/cards/prato-frio-2.png',
          Category: 'Cold Dishes'
        },
        {
          Id: 11,
          Description: 'Lorem Ipsum is not simply random.',
          Sale: 2.19,
          Availability: 15,
          Image: '../../../../assets/cards/prato-frio-3.png',
          Category: 'Cold Dishes'
        },
      ])
    })
  }
}
