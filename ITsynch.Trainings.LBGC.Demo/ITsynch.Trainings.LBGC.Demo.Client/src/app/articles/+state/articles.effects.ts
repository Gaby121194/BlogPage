import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ArticlesService } from '../articles.service';
import * as ArticlesActions from './articles.actions'


@Injectable()
export class ArticlesEffects {



  constructor(private actions$: Actions, private articlesService: ArticlesService) {}

  createArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.createArticle),
      switchMap(({article}) =>
        this.articlesService.postArticle(article).pipe(
          map((article) => ArticlesActions.createArticleSucess({ article })),
          catchError((error) => of(ArticlesActions.createArticleFailure({ error })))
        )
      )
    );
  });

  loadArticles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.loadArticles),
      switchMap(() =>
        this.articlesService.getArticles().pipe(
          map((articles) => ArticlesActions.loadArticlesSuccess({ articles })),
          catchError((error) => of(ArticlesActions.loadArticlesFailure({ error })))
        )
      )
    );
  });


}
