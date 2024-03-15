import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'astronauts',
    loadChildren: () =>
      import('./features/astronauts/astronaut.routes').then((r) => r.routes),
  },
  {
    path: 'launches',
    loadChildren: () =>
      import('./features/launches/launches.routes').then((r) => r.routes),
  },
];

