import { Directive } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent, TrackService } from '@hobbit-fitness-pal/xplat/core';
import { Meal } from '@hobbit-fitness-pal/xplat/core';

@Directive()
export abstract class MealAddBaseComponent extends BaseComponent {

  mealName: string;

  constructor(
    protected router: Router,
    private trackService: TrackService
  ) {
    super();
  }

  trackMeal(meal: Meal): void {
    this.trackService.trackMeal(meal);
  }
}
