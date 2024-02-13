import { Routes } from '@angular/router';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';

export const routes: Routes = [  
  { path: ':launchType', pathMatch: 'full', component: LaunchListComponent },
  { path: 'details/:slug', pathMatch: 'full', component: LaunchDetailComponent },
];
