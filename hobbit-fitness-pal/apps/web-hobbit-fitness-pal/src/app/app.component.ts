import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@hobbit-fitness-pal/xplat/web/features';

@Component({
  selector: 'hobbit-fitness-pal-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
