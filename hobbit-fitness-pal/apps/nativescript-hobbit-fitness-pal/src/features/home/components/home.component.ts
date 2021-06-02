import { Component } from '@angular/core';
import { Dialogs } from '@nativescript/core';
import { HomeBaseComponent } from '@hobbit-fitness-pal/xplat/features';

@Component({
  moduleId: module.id,
  selector: 'hobbit-fitness-pal-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends HomeBaseComponent {

  comingSoon(): void {
    const alertOptions = {
      title: 'Coming soon',
      message: 'Sorry. Not working right now.',
      okButtonText: 'Sad face',
      cancelable: false
    }

    Dialogs.alert(alertOptions);
  }

}
