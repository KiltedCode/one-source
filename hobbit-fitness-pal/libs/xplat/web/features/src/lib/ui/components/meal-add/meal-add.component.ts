import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meal } from '@hobbit-fitness-pal/xplat/core';
import { MealAddBaseComponent } from '@hobbit-fitness-pal/xplat/features';

@Component({
  selector: 'hobbit-fitness-pal-meal-add',
  templateUrl: 'meal-add.component.html',
})
export class MealAddComponent extends MealAddBaseComponent implements OnInit {

  @ViewChild('video')
  public video: ElementRef;

  @ViewChild('canvas')
  public canvas: ElementRef;

  showMessage = false;

  public ngOnInit() {}

  public ngAfterViewInit() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.nativeElement.srcObject = stream;
            this.video.nativeElement.play();
        });
    }
  }

  captureImage(): void {
    this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
    const image = this.canvas.nativeElement.toDataURL('image/png');
    const imageMeal: Meal = {
      image,
      name: this.mealName
    };
    this.trackMeal(imageMeal);
    this.showMessage = true;
  }
}
