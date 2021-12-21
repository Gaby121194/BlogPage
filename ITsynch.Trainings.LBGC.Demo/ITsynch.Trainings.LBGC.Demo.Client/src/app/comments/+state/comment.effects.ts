import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { CommentsService } from '../comments.service';
import * as CommentActions from './comment.actions'


@Injectable()
export class CommentEffects {

  constructor(private actions$: Actions, private commentService: CommentsService, private snackBar: MatSnackBar) { }

  createComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CommentActions.createComment),
      switchMap(({ comment }) =>
        this.commentService.postComment(comment).pipe(
          map((comment) => CommentActions.createCommentSucess({ comment })),
          catchError((error) => of(CommentActions.createCommentFailure({ error })))
        )
      )
    );
  });

  createCommentSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CommentActions.createCommentSucess),
        tap(() => {
          this.snackBar.open('Comment created successfully', 'Accept', {
            duration: 3000,
          });
        })
      );
    },
    { dispatch: false }
  );

  getComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CommentActions.getAllCommentsByArticleId),
      switchMap(({ IdArticle }) =>
        this.commentService.getCommentsByArticleId(IdArticle).pipe(
          map((comments) => CommentActions.getAllCommentsByArticleIdSuccess({ comments })),
          catchError((error) => of(CommentActions.getAllCommentsByArticleIdFailure({ error })))
        )
      )
    );
  });

  deleteComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CommentActions.deleteComment),
      switchMap(({ CommentId }) =>
        this.commentService.deleteComment(CommentId).pipe(
          map((comment) => CommentActions.deleteCommentSucess({ comment })),
          catchError((error) => of(CommentActions.deleteCommentFailure({ error })))
        )
      )
    );
  });

  confirmDeleteComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CommentActions.confirmDeleteComment),
      map(({ CommentId }) => {
        const deleteCommentConfirmed = window.confirm('Are you sure you want to delete comment?');
        if (deleteCommentConfirmed) {
          return CommentActions.deleteComment({ CommentId });
        }
      })
    );
  });

}
