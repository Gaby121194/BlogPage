import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ArticlesService } from '../articles.service';
import * as ArticlesActions from './articles.actions'


@Injectable()
export class ArticlesEffects {



  constructor(private actions$: Actions, private articlesService: ArticlesService, private snackBar: MatSnackBar) {}

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

  getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.getCurrentArticleById),
      switchMap(({articleId}) =>
        this.articlesService.getArticleById(articleId).pipe(
          map((article) => ArticlesActions.getCurrentArticleByIdSuccess({ article })),
          catchError((error) => of(ArticlesActions.getCurrentArticleByIdFailure({ error })))
        )
      )
    );
  });

  createArticleSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ArticlesActions.createArticleSucess),
        tap(() => {
          this.snackBar.open('Article creating successfully', 'Acept', {
            duration: 3000,
          });
        })
      );
    },
    { dispatch: false }
  );


}
