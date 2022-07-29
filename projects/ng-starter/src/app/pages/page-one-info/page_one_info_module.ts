import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarMenuModule } from '../../core/components/toolbar-menu/toolbar_menu_module';
import { PageOneInfo } from './page_one_info';

const ROUTES = [
  {
    path: '',
    component: PageOneInfo,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), ToolbarMenuModule],
  declarations: [PageOneInfo],
})
export class PageOneInfoModule {}
