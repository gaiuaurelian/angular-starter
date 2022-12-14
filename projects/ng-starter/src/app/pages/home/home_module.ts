import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ToolbarMenuModule } from '../../core/components/toolbar-menu/toolbar_menu_module';

import { Home } from './home';

const ROUTES = [
  {
    path: '',
    component: Home,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ToolbarMenuModule,
    MatButtonModule,
  ],
  declarations: [Home],
})
export class HomeModule {}
