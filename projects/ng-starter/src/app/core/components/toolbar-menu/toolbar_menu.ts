import { Component, Inject, OnInit } from '@angular/core';
import { ToolbarMenuModel } from '../../models/toolbar_menu_model';
import { Location } from '@angular/common';
import { APP_TOOLBAR_MENU } from '../../util/injection-tokens';


@Component({
  selector: 'app-toolbar-menu',
  templateUrl: 'toolbar_menu.html',
  styleUrls: ['./toolbar_menu.scss']
})
export class ToolbarMenu implements OnInit {
  constructor(
    @Inject(APP_TOOLBAR_MENU) public readonly menu: ToolbarMenuModel,
    private readonly location: Location
  ) {}

  ngOnInit() {}

  onBackButton() {
    this.location.back();
  }
}
