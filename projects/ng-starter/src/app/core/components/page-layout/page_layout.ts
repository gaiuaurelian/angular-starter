import { Component, OnInit } from '@angular/core';
import { SidebarNavigationModel } from '../../models/sidebar_navigation_model';
import { APP_SIDEBAR_NAVIGATION } from '../../util/injection-tokens';



@Component({
  selector: 'app-page-layout',
  templateUrl: 'page_layout.html',
  styleUrls: ['./page_layout.scss'],
})
export class PageLayout implements OnInit {
  constructor() {}

  ngOnInit() {}
}
