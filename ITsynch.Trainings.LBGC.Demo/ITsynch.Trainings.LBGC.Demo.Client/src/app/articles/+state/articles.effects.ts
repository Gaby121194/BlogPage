import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
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

  deleteArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.deleteArticle),
      switchMap(({articleId}) =>
        this.articlesService.deleteArticle(articleId).pipe(
          map((article) => ArticlesActions.deleteArticleSucess({ article })),
          catchError((error) => of(ArticlesActions.deleteArticleFailure({ error })))
        )
      )
    );
  });

  editArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.editArticle),
      switchMap(({article, articleId}) =>
        this.articlesService.editArticle(articleId, article).pipe(
          map((article) => ArticlesActions.editArticleSucess({ article })),
          catchError((error) => of(ArticlesActions.editArticleFailure({ error })))
        )
      )
    );
  });

  confirmDeleteArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.confirmDeleteArticle),
      map(({ articleId }) => {
        const deleteArticleConfirmed = window.confirm('Are you sure you want to delete article?');
        if (deleteArticleConfirmed) {
          return ArticlesActions.deleteArticle({ articleId });
        }
      })
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

  filterArticles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.filterArticles),
      switchMap(({filter}) =>
        this.articlesService.filterArticles(filter).pipe(
          map((articles) => ArticlesActions.filterArticlesSuccess({ articles })),
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

  getArticleToEdit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.getArticleToEdit),
      switchMap(({articleId}) =>
        this.articlesService.getArticleById(articleId).pipe(
          map((article) => ArticlesActions.getArticleToEditSuccess({ article })),
          catchError((error) => of(ArticlesActions.getArticleToEditFailure({ error })))
        )
      )
    );
  });

  createArticleSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ArticlesActions.createArticleSucess),
        tap(() => {
          this.snackBar.open('Article created successfully', 'Acept', {
            duration: 3000,
          });
        })
      );
    },
    { dispatch: false }
  );

  editArticleSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ArticlesActions.editArticleSucess),
        tap(() => {
          this.snackBar.open('Article edited successfully', 'Acept', {
            duration: 3000,
          });
        })
      );
    },
    { dispatch: false }
  );

  effectInitialized$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.effectInitialized),
      map(() => ArticlesActions.loadArticles()),
      take(1)
    );
  });

  ngrxOnInitEffects(): Action {
    return ArticlesActions.effectInitialized();
  }


}
