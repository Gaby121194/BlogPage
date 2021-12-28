import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { ArticlesService } from '../articles.service';
import * as ArticlesActions from './articles.actions'
import * as UsersActions from '../../users/+state/users.actions';
import { getCurrentUser, getCurrentUserId } from '../../users/+state/users.selectors';

@Injectable()
export class ArticlesEffects {



  constructor(private actions$: Actions, private articlesService: ArticlesService, private snackBar: MatSnackBar, private store: Store) {}

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

  loadFavoritesArticles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.loadFavoritesArticles),
      delay(0),
      withLatestFrom(this.store.pipe(select(getCurrentUserId))),
      switchMap(([_,userId]) => 
        this.articlesService.getFavoritesArticles(userId).pipe(
          map((articles) => ArticlesActions.loadFavoritesArticlesSuccess({ articles })),
          catchError((error) => of(ArticlesActions.loadFavoritesArticlesFailure({ error })))
        )
      )
    );
  });

  markAsFavoriteArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.markArticleAsFavorite),
      switchMap(({userId, articleId}) => 
        this.articlesService.markFavoriteArticle(userId, articleId).pipe(
          map((article) => ArticlesActions.markArticleAsFavoriteSuccess({ article })),
          catchError((error) => of(ArticlesActions.markArticleAsFavoriteFailure({ error })))
        )
      )
    );
  });

  unmarkAsFavoriteArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.unmarkArticleAsFavorite),
      switchMap(({userId, articleId}) => 
        this.articlesService.unmarkFavoriteArticle(userId, articleId).pipe(
          map((article) => ArticlesActions.unmarkArticleAsFavoriteSuccess({ article })),
          catchError((error) => of(ArticlesActions.unmarkArticleAsFavoriteFailure({ error })))
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

  filterArticlesSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ArticlesActions.filterArticlesSuccess),
        tap(() => {
          this.snackBar.open('Articles filtered successfully', 'Acept', {
            duration: 3000,
          });
        })
      );
    },
    { dispatch: false }
  );

  filterArticlesFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ArticlesActions.filterArticlesFailure),
        tap(() => {
          this.snackBar.open('Articles filtered failed', 'Close', {
            duration: 3000,
          });
        })
      );
    },
    { dispatch: false }
  );


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

  createArticleFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ArticlesActions.createArticleFailure),
        tap(() => {
          this.snackBar.open('Article created failed', 'Acept', {
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
