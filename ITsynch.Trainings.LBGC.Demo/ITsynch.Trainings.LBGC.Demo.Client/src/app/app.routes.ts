import { Routes } from '@angular/router';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
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
    path: `articles`,
    component: ListArticlesComponent
  },
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full',
  },
  {
    path: '*',
    component: NotFoundComponent,
  },
];
