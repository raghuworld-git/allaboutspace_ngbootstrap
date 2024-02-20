import { Routes } from '@angular/router';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { UpcomingLaunchesComponent } from './launches/upcoming-launches/upcoming-launches.component';
import { PastLaunchesComponent } from './launches/past-launches/past-launches.component';

export const routes: Routes = [
  {
    path: 'upcoming',
    component: UpcomingLaunchesComponent,
  },
  {
    path: 'previous',
    component: PastLaunchesComponent,
  },
  {
    path: 'details/:slug',
    pathMatch: 'full',
    component: LaunchDetailComponent,
  },
];
