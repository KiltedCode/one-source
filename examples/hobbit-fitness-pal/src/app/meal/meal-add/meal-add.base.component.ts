import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';
import { MealService } from '../meal.service';

@Component({
  selector: 'hfp-meal-add',
  templateUrl: './meal-add.component.html',
  styleUrls: ['./meal-add.component.scss']
})
export class MealAddBaseComponent implements OnInit {
  customPlaceholder: string;
  foods: any[];
  mealName: string;
  selectedFood: string;
  showSuccess: boolean;

  constructor(
    protected foodService: FoodService,
    protected mealService: MealService,
    protected route: ActivatedRoute,
    protected router: Router
  ) { }

  ngOnInit() {
    this.selectedFood = '';
    this.showSuccess = false;
    this.customPlaceholder = this.getPlaceholder('');

    this.getFoodList();

    this.route.params.subscribe(params => {
      this.getMealName(params['id']);
   });
  }

  getFoodList(): void {
    this.foodService.getFoods()
      .subscribe(
        (foods: any[]) => {
          this.foods = foods;
        }
      );
  }

  getMealName(id: string): void {
    this.mealName = this.mealService.getMealName(id);
  }

  getPlaceholder(name: string): string {
    return name === 'CUSTOM' ?
          'Enter custom food name' :
          'select custom to enter';
  }

  selectFood(name: string): void {
    this.selectedFood = name;
    this.customPlaceholder  = this.getPlaceholder(name);
  }

  trackMeal(customFood): void {
    if (this.selectedFood === '' || (this.selectedFood === 'CUSTOM' && customFood.length === 0)) {
      // error
      return;
    }

    this.showSuccess = true;
  }

}
