import { Routes } from '@angular/router';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { UpcomingComponent } from './launches-list/upcoming/upcoming.component';
import { PreviousComponent } from './launches-list/previous/previous.component';

export const routes: Routes = [
  {
    path: 'upcoming',
    component: UpcomingComponent,
  },  

  {
    path: 'previous',
    component: PreviousComponent,
  },
  {
    path: 'details/:id',
    pathMatch: 'full',
    component: LaunchDetailComponent,
  },
];
