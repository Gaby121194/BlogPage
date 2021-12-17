import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
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

}
