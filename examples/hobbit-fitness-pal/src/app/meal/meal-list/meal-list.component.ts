import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';

@Component({
  selector: 'hfp-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
  meals = [];

  constructor(
    private mealService: MealService
  ) { }

  ngOnInit() {
    this.getMealList();
  }

  getMealList(): void {
    this.mealService.getMealList()
      .subscribe(
        (meals: any[]) => {
          this.meals = meals;
        }
      );
  }

}
