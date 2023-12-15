import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';
import { Product } from '../models/product.model';
import { MostProductOrdered } from '../models/most-ordered-product.model';

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
          Price: 2.29,
          Availability: 20,
          Image: './assets/cards/Images12.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 2,
          Description: 'Salted Pasta with mushroom sauce',
          Price: 2.69,
          Availability: 11,
          Image: './assets/cards/Images42.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 3,
          Description: 'Beef dumpling in hot and sour soup',
          Price: 2.99,
          Availability: 16,
          Image: './assets/cards/Images13.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 4,
          Description: 'Healthy noodle with spinach leaf',
          Price: 3.49,
          Availability: 22,
          Image: './assets/cards/Images10.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 5,
          Description: 'Hot spicy fried rice with omelet',
          Price: 3.49,
          Availability: 13,
          Image: './assets/cards/Images.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 6,
          Description: 'Spicy instant noodle with special omelette',
          Price: 3.59,
          Availability: 17,
          Image: './assets/cards/Images9.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 7,
          Description: 'Healthy noodle with spinach leaf',
          Price: 4.28,
          Availability: 30,
          Image: './assets/cards/Images6.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 8,
          Description: 'Salted Pasta with mushroom sauce',
          Price: 2.99,
          Availability: 25,
          Image: './assets/cards/Images15.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 9,
          Description: 'is simply dummy text of the printing.',
          Price: 3.59,
          Availability: 20,
          Image: './assets/cards/prato-frio-1.png',
          Category: 'Cold Dishes'
        },
        {
          Id: 10,
          Description: 'but also the leap into electronic.',
          Price: 2.69,
          Availability: 10,
          Image: './assets/cards/prato-frio-2.png',
          Category: 'Cold Dishes'
        },
        {
          Id: 11,
          Description: 'Lorem Ipsum is not simply random.',
          Price: 2.19,
          Availability: 15,
          Image: './assets/cards/prato-frio-3.png',
          Category: 'Cold Dishes'
        },
      ])
    })
  }

  getMostOrderedProduct(): Observable<MostProductOrdered[]>{
    return new Observable(observer => {
      return  observer.next([
        {
          Id: 1,
          Description: 'Spicy seasoned seafood noodles',
          Ordered: 150,
          Image: './assets/cards/Images12.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 2,
          Description: 'Salted Pasta with mushroom sauce',
          Ordered: 200,
          Image: './assets/cards/Images42.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 3,
          Description: 'Beef dumpling in hot and sour soup',
          Ordered: 250,
          Image: './assets/cards/Images13.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 4,
          Description: 'Healthy noodle with spinach leaf',
          Ordered: 100,
          Image: './assets/cards/Images10.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 5,
          Description: 'Hot spicy fried rice with omelet',
          Ordered: 50,
          Image: './assets/cards/Images.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 6,
          Description: 'Spicy instant noodle with special omelette',
          Ordered: 78,
          Image: './assets/cards/Images9.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 7,
          Description: 'Healthy noodle with spinach leaf',
          Ordered: 100,
          Image: './assets/cards/Images6.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 8,
          Description: 'Salted Pasta with mushroom sauce',
          Ordered: 50,
          Image: './assets/cards/Images15.png',
          Category: 'Hot Dishes'
        },
        {
          Id: 9,
          Description: 'is simply dummy text of the printing.',
          Ordered: 20,
          Image: './assets/cards/prato-frio-1.png',
          Category: 'Cold Dishes'
        },
        {
          Id: 10,
          Description: 'but also the leap into electronic.',
          Ordered: 122,
          Image: './assets/cards/prato-frio-2.png',
          Category: 'Cold Dishes'
        },
        {
          Id: 11,
          Description: 'Lorem Ipsum is not simply random.',
          Ordered: 90,
          Image: './assets/cards/prato-frio-3.png',
          Category: 'Cold Dishes'
        },
      ])
    })
  }
}
