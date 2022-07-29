import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PageLayoutModule } from '../../core/components/page-layout/page_layout_module';
import { ToolbarMenuModule } from '../../core/components/toolbar-menu/toolbar_menu_module';
import { FeatureOneModule } from '../../features/feature-one/feature_one_module';

import { PageOne } from './page_one';

const ROUTES = [
  {
    path: '',
    component: PageOne,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ToolbarMenuModule,
    PageLayoutModule,
    MatButtonModule,
    FeatureOneModule,
  ],
  declarations: [PageOne],
})
export class PageOneModule {}
