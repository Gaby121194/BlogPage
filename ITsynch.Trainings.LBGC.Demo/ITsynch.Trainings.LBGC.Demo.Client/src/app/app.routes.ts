import { Routes } from '@angular/router';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { UsersHomeComponent } from './users/users-home/users-home.component';

export const appRoutes: Routes = [
  {
    path: 'articles/create',
    component: CreateArticleComponent,
  },
  {
    path: 'users',
    component: UsersHomeComponent
  },
  {
    path: '',
    redirectTo: 'articles/create',
    pathMatch: 'full',
  },
  {
    path: '*',
    component: NotFoundComponent,
  },
];
