import { Component, OnInit } from '@angular/core';
import { TrackOverviewService } from '../shared/track-overview.service';

@Component({
  selector: 'hfp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  overview = [];

  constructor(
    private trackOverviewService: TrackOverviewService
  ) { }

  ngOnInit() {
    this.getOverview();
  }

  getOverview(): void {
    this.trackOverviewService.getTrackingOverview()
      .subscribe(
        (overview: any[]) => {
          this.overview = overview;
        }
      );
  }
}
