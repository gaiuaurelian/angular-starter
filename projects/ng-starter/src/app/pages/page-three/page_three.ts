import { Component, OnInit } from '@angular/core';
import { MAIN_NAVIGATION } from '../../core/util/constants';
import { APP_SIDEBAR_NAVIGATION } from '../../core/util/injection-tokens';

@Component({
  selector: 'app-page-three',
  templateUrl: 'page_three.html',
  providers: [
    {
      provide: APP_SIDEBAR_NAVIGATION,
      useValue: MAIN_NAVIGATION,
    },
  ],
})
export class PageThree implements OnInit {
  constructor() { }

  ngOnInit() { }
}
