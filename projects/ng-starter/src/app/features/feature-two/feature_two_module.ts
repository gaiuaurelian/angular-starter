import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FeatureTwo } from "./feature_two";

const COMPONENTS = [FeatureTwo];
@NgModule({
  imports: [CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class FeatureTwoModule{}
