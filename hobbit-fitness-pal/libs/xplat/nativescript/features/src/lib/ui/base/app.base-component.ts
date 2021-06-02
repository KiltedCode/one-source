import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@hobbit-fitness-pal/xplat/core';
import { AppService } from '@hobbit-fitness-pal/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
