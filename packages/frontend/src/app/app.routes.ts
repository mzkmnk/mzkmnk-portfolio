import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((M) => M.HomeComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

