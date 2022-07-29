import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarNavigationModel } from '../../core/models/sidebar_navigation_model';
import { APP_SIDEBAR_NAVIGATION } from '../../core/util/injection-tokens';

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: 'sidebar_navigation.html',
  styleUrls: ['./sidebar_navigation.scss']
})
export class SidebarNavigation implements OnInit {
  constructor(
    @Inject(APP_SIDEBAR_NAVIGATION) public navigations: SidebarNavigationModel[],
    private readonly router: Router
  ) {}

  ngOnInit() {}
}
