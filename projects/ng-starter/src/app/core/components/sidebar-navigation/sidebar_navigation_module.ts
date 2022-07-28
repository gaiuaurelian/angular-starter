import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SidebarNavigation } from './sidebar_navigation';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const COMPONENTS = [SidebarNavigation];

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class SidebarNavigationModule {}
