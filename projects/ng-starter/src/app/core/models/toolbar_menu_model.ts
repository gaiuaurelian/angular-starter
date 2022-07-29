import { SidebarNavigationModel } from "./sidebar_navigation_model";

export interface ToolbarMenuModel {
  hasBackButton: boolean;
  pageName: string;
  menus: SidebarNavigationModel[]
}
