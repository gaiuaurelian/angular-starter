import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageOne } from './page_one';

const ROUTES = [
  {
    path: '',
    component: PageOne,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [PageOne],
})
export class PageOneModule {}
