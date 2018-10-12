import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foods = [
    {
      name: 'Honey Nut Cake'
    },
    {
      name: 'Bilbo\'s Tea Cake'
    },
    {
      name: 'Elven Lembas Bread'
    },
    {
      name: 'Po-Tay-To Onion Soup'
    },
    {
      name: 'Roasted Po-Tay-Tos'
    },
    {
      name: 'Mrs. Maggot\'s Cottage Pie'
    },
    {
      name: 'Hobbit\'s Porridge'
    },
    {
      name: 'Scotch Eggs Strider'
    },
    {
      name: 'Shire Pudding'
    },
    {
      name: 'Tater Cookies'
    }
  ];

  constructor() { }

  getFoods(): Observable<any[]> {
    return of(this.foods);
  }
}
