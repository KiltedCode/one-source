import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackOverviewService {
  private tracking = [
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

  constructor() { }

  getTrackingOverview(): Observable<any[]> {
    return of(this.tracking);
  }
}
