import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { componentDeclarations } from './meal.common';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule
  ],
  declarations: [
    componentDeclarations
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MealModule { }
