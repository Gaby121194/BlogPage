import { Routes } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { UsersHomeComponent } from './users/users-home/users-home.component';

export const appRoutes: Routes = [
  {
    path: 'users',
    component: UsersHomeComponent,
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: '*',
    component: NotFoundComponent,
  },
];
