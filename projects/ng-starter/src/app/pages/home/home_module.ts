import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Home } from './home';

const ROUTES = [
  {
    path: '',
    component: Home,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [Home],
})
export class HomeModule {}
