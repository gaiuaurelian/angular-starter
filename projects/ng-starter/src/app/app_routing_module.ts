import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home_module').then((m) => m.HomeModule),
  },
  {
    path: 'page-one',
    loadChildren: () =>
      import('./pages/page-one/page_one_module').then((m) => m.PageOneModule),
  },
  {
    path: 'page-two',
    loadChildren: () =>
      import('./pages/page-two/page_two_module').then((m) => m.PageTwoModule),
  },
  {
    path: 'page-three',
    loadChildren: () =>
      import('./pages/page-three/page_three_module').then((m) => m.PageThreeModule),
  },
  {
    path: 'page-one-info',
    loadChildren: () =>
      import('./pages/page-one-info/page_one_info_module').then((m) => m.PageOneInfoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
