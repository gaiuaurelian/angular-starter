import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutModule } from '../../core/components/page-layout/page_layout_module';
import { ToolbarMenuModule } from '../../core/components/toolbar-menu/toolbar_menu_module';
import { FeatureOneModule } from '../../features/feature-one/feature_one_module';
import { FeatureTwoModule } from '../../features/feature-two/feature_two_module';

import { PageThree } from './page_three';

const ROUTES = [
  {
    path: '',
    component: PageThree,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ToolbarMenuModule,
    PageLayoutModule,
    FeatureOneModule,
    FeatureTwoModule,
  ],
  declarations: [PageThree],
})
export class PageThreeModule {}
