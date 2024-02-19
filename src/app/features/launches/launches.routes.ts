import { Routes } from '@angular/router';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { LaunchesContainerComponent } from './launches-container/launches-container.component';
import { UpcomingLaunchesComponent } from './launches-container/upcoming-launches/upcoming-launches.component';

export const routes: Routes = [
  {
    path: '', component: LaunchesContainerComponent, children: [
      {
        path: 'upcoming', component: UpcomingLaunchesComponent,
      }
    ]
  },
  { path: 'details/:slug', pathMatch: 'full', component: LaunchDetailComponent },
];
