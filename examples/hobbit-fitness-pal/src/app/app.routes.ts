import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealAddComponent } from './meal/meal-add/meal-add.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'meal-list',
      component: MealListComponent
  },
  {
      path: 'meal-add/:id',
      component: MealAddComponent
  }
];
