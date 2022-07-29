import { Observable, of } from 'rxjs';
import { SidebarNavigationModel } from '../models/sidebar_navigation_model';

// dummy data
export function getDummyDataNumbers(): Observable<number[]> {
  return of([1, 2, 3, 4, 5, 6]);
}

export const MAIN_NAVIGATION: SidebarNavigationModel[] = [
  {
    path: '/page-one',
    displayName: 'Page One',
  },
  {
    path: '/page-two',
    displayName: 'Page Two',
  },
  {
    path: '/page-three',
    displayName: 'Page-Two',
  },
];
