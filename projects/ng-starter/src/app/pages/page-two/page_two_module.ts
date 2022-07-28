import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageTwo } from './page_two';

const ROUTES = [
  {
    path: '',
    component: PageTwo,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [PageTwo],
})
export class PageTwoModule {}
