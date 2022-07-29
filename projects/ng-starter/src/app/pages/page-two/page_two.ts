import { Component, OnInit } from '@angular/core';
import { SidebarNavigationModel } from '../../core/models/sidebar_navigation_model';
import { MAIN_NAVIGATION } from '../../core/util/constants';
import { APP_SIDEBAR_NAVIGATION } from '../../core/util/injection-tokens';
export const NAVIGATION: SidebarNavigationModel[] = [
  {
    path: '/feature-one',
    displayName: 'feature-one',
  },
  {
    path: '/feature-two',
    displayName: 'feature-two',
  },
];

@Component({
  selector: 'app-page-two',
  templateUrl: 'page_two.html',
  providers: [
    {
      provide: APP_SIDEBAR_NAVIGATION,
      useValue: MAIN_NAVIGATION,
    },
  ],
})
export class PageTwo implements OnInit {
  constructor() { }

  ngOnInit() { }
}
