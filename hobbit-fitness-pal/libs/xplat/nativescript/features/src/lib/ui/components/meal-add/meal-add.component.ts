import { Component } from '@angular/core';
import { MealAddBaseComponent } from '@hobbit-fitness-pal/xplat/features';
import { Dialogs, ImageAsset } from '@nativescript/core';
import * as camera from "@nativescript/camera";
import { Meal } from '@hobbit-fitness-pal/xplat/core';

@Component({
  moduleId: module.id,
  selector: 'hobbit-fitness-pal-meal-add',
  templateUrl: './meal-add.component.html',
})
export class MealAddComponent extends MealAddBaseComponent {

  showForm = false;

  ngOnInit(): void {
    camera.requestPermissions().then(
      () => { this.showForm = true; },
      () => { /* permission request rejected */}
    );
  }

  captureImage(): void {
    camera.takePicture()
      .then((imageAsset: ImageAsset) => {
          const imageMeal: Meal = {
            image: imageAsset.nativeImage,
            name: this.mealName
          };
          this.trackMeal(imageMeal);

          const alertOptions = {
            title: 'Meal Tracked',
            message: 'Remember, stop before nightfall.',
            okButtonText: 'Onward',
            cancelable: false
          }

          Dialogs.alert(alertOptions).then(() => {
            this.router.navigate(['/home']);
          })
      });
  }

}
