import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageThree } from './page_three';

const ROUTES = [
  {
    path: '',
    component: PageThree,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [PageThree],
})
export class PageThreeModule {}
