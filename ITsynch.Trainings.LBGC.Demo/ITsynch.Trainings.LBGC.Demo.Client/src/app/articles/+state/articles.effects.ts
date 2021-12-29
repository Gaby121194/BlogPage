import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { ArticlesService } from '../articles.service';
import * as ArticlesActions from './articles.actions'
import { getCurrentUserId } from '../../users/+state/users.selectors';

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

  createDraftArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.createDraftArticle),
      switchMap(({article}) =>
        this.articlesService.createDraftArticle(article).pipe(
          map((article) => ArticlesActions.createDraftArticleSucess({ article })),
          catchError((error) => of(ArticlesActions.createDraftArticleFailure({ error })))
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

  loadDraftArticles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.loadDraftArticles),
      delay(0),
      withLatestFrom(this.store.pipe(select(getCurrentUserId))),
      switchMap(([_,userId]) =>
        this.articlesService.getDraftArticles(userId).pipe(
          map((articles) => ArticlesActions.loadDraftArticlesSuccess({ articles })),
          catchError((error) => of(ArticlesActions.loadDraftArticlesFailure({ error })))
        )
      )
    );
  });

  loadDeletedArticles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.loadDeletedArticles),
      delay(0),
      withLatestFrom(this.store.pipe(select(getCurrentUserId))),
      switchMap(([_,userId]) =>
        this.articlesService.getDeletedArticles(userId).pipe(
          map((articles) => ArticlesActions.loadDeletedArticlesSuccess({ articles })),
          catchError((error) => of(ArticlesActions.loadDeletedArticlesFailure({ error })))
        )
      )
    );
  });

  confirmRestoreArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.confirmRestoredDeleteArticle),
      map(({ articleId }) => {
        const restoreArticleConfirmed = window.confirm('Are you sure you want to restore this deleted article?');
        if (restoreArticleConfirmed) {
          return ArticlesActions.restoreDeletedArticle({ articleId });
        }
      })
    );
  });

  restoreDeletedArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.restoreDeletedArticle),
      switchMap(({articleId}) =>
        this.articlesService.restoreDeletedArticle(articleId).pipe(
          map((article) => ArticlesActions.restoreDeletedArticleSucess({ article })),
          catchError((error) => of(ArticlesActions.restoreDeletedArticleFailure({ error })))
        )
      )
    );
  });

  restoreArticleDeletedSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ArticlesActions.restoreDeletedArticleSucess),
        tap(() => {
          this.snackBar.open('Article deleted has benn restored successfully', 'Acept', {
            duration: 3000,
          });
        })
      );
    },
    { dispatch: false }
  );

  restoreArticleDeletedFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ArticlesActions.restoreDeletedArticleFailure),
        tap((err) => {
          this.snackBar.open('Failed restoring the deleted article' , 'Acept', {
            duration: 3000,
          });
        })
      );
    },
    { dispatch: false }
  );

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

  confirmPostDraftArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.confirmPostDraftArticle),
      map(({ articleId }) => {
        const postDraftArticleConfirmed = window.confirm('Are you sure you want to post this draft as an article?');
        if (postDraftArticleConfirmed) {
          return ArticlesActions.postDraftArticle({ articleId });
        }
      })
    );
  });

  postDraftArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.postDraftArticle),
      switchMap(({articleId}) =>
        this.articlesService.postDraftArticle(articleId).pipe(
          map((article) => ArticlesActions.postDraftArticleSucess({ article })),
          catchError((error) => of(ArticlesActions.postDraftArticleFailure({ error })))
        )
      )
    );
  });
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

  postDraftArticleSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ArticlesActions.postDraftArticleSucess),
        tap(() => {
          this.snackBar.open('Draft Article post successfully', 'Accept', {
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

  createDraftArticleSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ArticlesActions.createDraftArticleSucess),
        tap(() => {
          this.snackBar.open('Draft Article created successfully', 'Acept', {
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
