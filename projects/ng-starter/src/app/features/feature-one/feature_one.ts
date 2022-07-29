import { Component, OnInit } from '@angular/core';
import { FeatureOneService } from './feature_one_service';

@Component({
  selector: 'app-feature-one',
  templateUrl: 'feature_one.html',
  providers: [FeatureOneService]
})
export class FeatureOne implements OnInit {
  sum: number = 0;

  constructor(private readonly featureOneService: FeatureOneService) {}

  ngOnInit() {
    this.featureOneService.fetchSum().subscribe((value) => (this.sum = value));
  }
}
