import { Component, OnInit } from '@angular/core';
import { APP_TOOLBAR_MENU } from '../../core/util/injection-tokens';

const PAGE_ONE_INFO_TOOLBAR_MENU = {
  hasBackButton: true,
  pageName: 'Page one info page',
  menus: [],
};

@Component({
  selector: 'app-page-one-info',
  templateUrl: 'page_one_info.html',
  providers: [
    {
      provide: APP_TOOLBAR_MENU,
      useValue: PAGE_ONE_INFO_TOOLBAR_MENU,
    },
  ],
})
export class PageOneInfo implements OnInit {
  constructor() {}

  ngOnInit() {}
}
