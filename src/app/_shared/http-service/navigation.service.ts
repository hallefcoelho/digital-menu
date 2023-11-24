import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationInterface } from '../interfaces/navigation.interface';
import { Navigation } from '../models/navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements NavigationInterface {

constructor() { }

  getNavigation(): Observable<Navigation[]>{
    return new Observable(observer => {
      return  observer.next([
        {
          Id: 1,
          Name: 'Hot Dishes'
        },
        {
          Id: 2,
          Name: 'Cold Dishes'
        },
        {
          Id: 3,
          Name: 'Soup'
        },
        {
          Id: 4,
          Name: 'Grill'
        },
        {
          Id: 5,
          Name: 'Appetizer'
        },
        {
          Id: 6,
          Name: 'Dessert'
        },
      ])
    })
  }
}
