import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { SidebarNavigation } from './sidebar_navigation';

const COMPONENTS = [SidebarNavigation];

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: COMPONENTS,
  declarations: COMPONENTS,
})
export class SiderbarNavigationModule {}
