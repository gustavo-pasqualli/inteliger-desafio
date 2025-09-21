import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home').then(c => c.Home),
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./features/profile/profile').then(c => c.Profile),
  },

  { path: '**', redirectTo: 'home' },
];
