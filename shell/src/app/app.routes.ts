import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
export const appRoutes: Route[] = [
  {
    path: 'gallery',
    loadChildren: () => import('gallery/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'projects',
    loadChildren: () => import('projects/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'contactme',
    loadChildren: () => import('contactme/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'profile',
    loadChildren: () => import('profile/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'aboutme',
    loadChildren: () => import('aboutme/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: HomeComponent,
  },
];
