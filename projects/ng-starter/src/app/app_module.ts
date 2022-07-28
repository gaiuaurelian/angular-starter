import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app_routing_module';
import { AppComponent } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarNavigationModule } from './core/components/sidebar-navigation/sidebar_navigation_module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, SidebarNavigationModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
