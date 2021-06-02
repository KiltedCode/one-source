import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrackOption } from '../models';
import { Meal } from '../models/meal.interface';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private tracking: TrackOption[] = [
    {
      meal: 'Breakfast',
      tracked: true
    },
    {
      meal: 'Second Breakfast',
      tracked: true
    },
    {
      meal: 'Elevenses',
      tracked: true
    },
    {
      meal: 'Luncheon',
      tracked: false
    },
    {
      meal: 'Afternoon Tea',
      tracked: false
    },
    {
      meal: 'Dinner',
      tracked: false
    },
    {
      meal: 'Supper',
      tracked: false
    }
  ];

  constructor() {}

  getTrackingOverview(): Observable<TrackOption[]> {
    return of(this.tracking);
  }

  trackMeal(meal: Meal): Observable<boolean> {
    return of(true);
  }
}
