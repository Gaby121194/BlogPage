import { Routes } from '@angular/router';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { DeletedArticlesListComponent } from './articles/deleted-articles-list/deleted-articles-list.component';
import { DraftArticlesComponent } from './articles/draft-articles/draft-articles.component';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';
import { FavoriteArticlesListComponent } from './articles/favorite-articles-list/favorite-articles-list.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { ViewArticleComponent } from './articles/view-article/view-article.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { UsersHomeComponent } from './users/users-home/users-home.component';

export const appRoutes: Routes = [
  {
    path: 'articles/create',
    component: CreateArticleComponent,
  },
  {
    path: 'articles/edit/:id',
    component: EditArticleComponent,
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
    path: `favoritesArticles`,
    component: FavoriteArticlesListComponent
  },
  {
    path: `deletedArticles`,
    component: DeletedArticlesListComponent
  },
  {
    path: `articles/:id`,
    component: ViewArticleComponent
  },
  {
    path: `draftArticles`,
    component: DraftArticlesComponent
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
