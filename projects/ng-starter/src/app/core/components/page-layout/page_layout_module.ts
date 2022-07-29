import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageLayout } from './page_layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SiderbarNavigationModule } from '../../../shared/sidebar-navigation/sidebar_navigation_module';
import { RouterModule } from '@angular/router';
import { ToolbarMenuModule } from '../toolbar-menu/toolbar_menu_module';

const COMPONENTS = [PageLayout];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    SiderbarNavigationModule,
    ToolbarMenuModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class PageLayoutModule {}
