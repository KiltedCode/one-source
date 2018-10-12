import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { componentDeclarations } from './meal.common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    componentDeclarations
  ]
})
export class MealModule { }
