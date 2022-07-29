import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PageLayoutModule } from '../../core/components/page-layout/page_layout_module';
import { ToolbarMenuModule } from '../../core/components/toolbar-menu/toolbar_menu_module';
import { FeatureTwoModule } from '../../features/feature-two/feature_two_module';

import { PageTwo } from './page_two';

const ROUTES = [
  {
    path: '',
    component: PageTwo,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ToolbarMenuModule,
    PageLayoutModule,
    MatButtonModule,
    FeatureTwoModule,
  ],
  declarations: [PageTwo],
})
export class PageTwoModule {}
