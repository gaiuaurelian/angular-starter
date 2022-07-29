import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureOne } from './feature_one';

const COMPONENTS = [FeatureOne];
@NgModule({
  imports: [CommonModule],
  exports: COMPONENTS,
  declarations: COMPONENTS,
})
export class FeatureOneModule {}
