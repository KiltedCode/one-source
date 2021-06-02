import { Component } from '@angular/core';
import { AppService } from '@hobbit-fitness-pal/xplat/nativescript/core';
import { AppBaseComponent } from '@hobbit-fitness-pal/xplat/nativescript/features';

@Component({
  selector: 'hobbit-fitness-pal-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
