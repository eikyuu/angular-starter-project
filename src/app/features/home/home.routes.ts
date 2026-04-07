import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./ui/home.component').then((m) => m.HomeComponent),
    title: 'Home — templateproject',
  },
];
