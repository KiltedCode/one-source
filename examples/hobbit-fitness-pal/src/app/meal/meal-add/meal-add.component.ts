import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';
import { MealService } from '../meal.service';

@Component({
  selector: 'hfp-meal-add',
  templateUrl: './meal-add.component.html',
  styleUrls: ['./meal-add.component.scss']
})
export class MealAddComponent implements OnInit {
  customPlaceholder: string;
  foods: any[];
  foodPickerList: string[];
  mealName: string;
  selectedFood: string;
  showSuccess: boolean;

  constructor(
    private foodService: FoodService,
    private mealService: MealService,
    private route: ActivatedRoute,
    private router: Router
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
          const foodsList = foods.map(food => {
            return food.name;
          });
          this.foodPickerList = [
            'Select a food:',
            ...foodsList,
            'CUSTOM'
          ];
        }
      );
  }

  getMealName(id: string): void {
    this.mealName = this.mealService.getMealName(id);
  }

  private getPlaceholder(name: string): string {
    return name === 'CUSTOM' ?
          'Enter custom food name' :
          'select custom to enter';
  }

  selectFood(name: string): void {
    this.selectedFood = name;
    this.customPlaceholder  = this.getPlaceholder(name);
  }

  selectFoodTNS(pick: any): void {
    const pickedIndex = pick.object.selectedIndex;
    let picked = '';
    if (pickedIndex > 0) {
      picked = this.foodPickerList[pickedIndex];
    }
    this.selectFood(picked);
  }

  trackMeal(customFood): void {
    if (this.selectedFood === '' || (this.selectedFood === 'CUSTOM' && customFood.length === 0)) {
      // error
      return;
    }

    this.showSuccess = true;
  }

}
