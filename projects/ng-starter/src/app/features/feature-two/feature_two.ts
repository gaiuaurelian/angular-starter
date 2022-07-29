import { Component, OnInit } from '@angular/core';
import { FeatureTwoService } from './feature_two_service';

@Component({
  selector: 'app-feature-two',
  templateUrl: 'feature_two.html',
  providers: [FeatureTwoService]
})

export class FeatureTwo implements OnInit {
  product: number = 0;

  constructor(private readonly featureTwoService: FeatureTwoService) {}

  ngOnInit() {
    this.featureTwoService.fetchProduct().subscribe((value) => (this.product = value));
  }
}
