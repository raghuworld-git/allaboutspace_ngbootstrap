import { Routes } from '@angular/router';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { launchTypesRestictionGuard } from './launch-types-restriction.guard';
import { LaunchesListComponent } from './launches-list/launches-list.component';


export const routes: Routes = [
  {
    path: ':launchtype',
    component: LaunchesListComponent,
    canActivate : [launchTypesRestictionGuard]
  },
  {
    path: 'details/:slug',
    pathMatch: 'full',
    component: LaunchDetailComponent,
  },
];
