import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private mealMapper = {
    breakfast : 'Breakfast',
    second: 'Second Breakfast',
    elevenses: 'Elevenses',
    luncheon: 'Luncheon',
    tea: 'Afternoon Tea',
    dinner: 'Dinner',
    supper: 'Supper'
  };

  constructor() { }


  getMealList(): Observable<any[]> {
    const tracking = [
      {
        id: 'breakfast',
        name: 'Breakfast',
        tracked: true
      },
      {
        id: 'second',
        name: 'Second Breakfast',
        tracked: true
      },
      {
        id: 'elevenses',
        name: 'Elevenses',
        tracked: false
      },
      {
        id: 'luncheon',
        name: 'Luncheon',
        tracked: false
      },
      {
        id: 'tea',
        name: 'Afternoon Tea',
        tracked: false
      },
      {
        id: 'dinner',
        name: 'Dinner',
        tracked: false
      },
      {
        id: 'supper',
        name: 'Supper',
        tracked: false
      }
    ];
    return of(tracking);
  }

  getMealName(id: string): string {
    return this.mealMapper[id] || id;
  }
}
