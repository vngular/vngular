import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: async () =>
      (await import('./home/home.component')).HomeComponent
  },
  {
    path: 'package/navigate-back',
    loadComponent: async () =>
      (await import('./navigate-back/navigate-back.component'))
        .NavigateBackComponent
  }
];
