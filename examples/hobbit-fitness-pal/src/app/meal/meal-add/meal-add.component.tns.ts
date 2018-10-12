import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';
import { MealService } from '../meal.service';
import { MealAddBaseComponent } from './meal-add.base.component';

import { alert } from 'tns-core-modules/ui/dialogs';

@Component({
  selector: 'hfp-meal-add',
  templateUrl: './meal-add.component.html',
  styleUrls: ['./meal-add.component.scss']
})
export class MealAddComponent extends MealAddBaseComponent implements OnInit {
  customPlaceholder: string;
  foods: any[];
  foodPickerList: string[];
  mealName: string;
  selectedFood: string;
  showSuccess: boolean;

  constructor(
    protected foodService: FoodService,
    protected mealService: MealService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    super(foodService, mealService, route, router);
  }

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

  selectFoodTNS(pick: any): void {
    const pickedIndex = pick.object.selectedIndex;
    let picked = '';
    if (pickedIndex > 0) {
      picked = this.foodPickerList[pickedIndex];
    }
    this.selectFood(picked);
  }

  trackMealTNS(customFood): void {
    this.trackMeal(customFood);
    if (this.showSuccess) {
      const options = {
        title: 'Meal Tracked',
        message: 'Remember, stop before nightfall.',
        okButtonText: 'Onward'
    };

    alert(options).then(() => {
      this.router.navigate(['/home']);
    });
    }
  }

}
