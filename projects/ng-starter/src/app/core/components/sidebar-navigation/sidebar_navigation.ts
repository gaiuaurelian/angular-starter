import { Component, Inject, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';
import { Navigation } from '../../models/navigation';
import { NAVIGATION } from '../../util/constants';
import { APP_NAVIGATION } from '../../util/injection-tokens';

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: 'sidebar_navigation.html',
  styleUrls: ['./sidebar_navigation.scss'],
  providers: [
    {
      provide: APP_NAVIGATION,
      useValue: NAVIGATION,
    },
  ],
})
export class SidebarNavigation implements OnInit {
  constructor(
    @Inject(APP_NAVIGATION) public navigations: Navigation[],
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSelectionChange(event: MatSelectionListChange) {
    const selectedValue = [...event.options.values()];
    const path = selectedValue[0].value;

    this.onNavigate(path);
  }

  onNavigate(path: string) {
    this.router.navigateByUrl(path);
  }
}
