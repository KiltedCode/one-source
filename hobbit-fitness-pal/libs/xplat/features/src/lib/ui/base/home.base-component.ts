import { Directive, OnInit } from '@angular/core';
import { BaseComponent, TrackOption, TrackService } from '@hobbit-fitness-pal/xplat/core';
import { Observable } from 'rxjs';

@Directive()
export abstract class HomeBaseComponent extends BaseComponent  implements OnInit {
  trackingOverview$: Observable<TrackOption[]>;

  constructor(
    private trackService: TrackService
  ) {
    super();
  }

  ngOnInit() {
    this.getOverview();
  }

  getOverview(): void {
    this.trackingOverview$ = this.trackService.getTrackingOverview();
  }
}
