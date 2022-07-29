import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ToolbarMenuModel } from '../../models/toolbar_menu_model';
import { APP_TOOLBAR_MENU } from '../../util/injection-tokens';
import { ToolbarMenu } from './toolbar_menu';

const COMPONENTS = [ToolbarMenu];

const DEFAULT_MENU: ToolbarMenuModel = {
  hasBackButton: false,
  pageName: '',
  menus: [
    {
      path: '/home',
      displayName: 'Home',
    },
  ],
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    {
      provide: APP_TOOLBAR_MENU,
      useValue: DEFAULT_MENU,
    },
  ],
})
export class ToolbarMenuModule {}
