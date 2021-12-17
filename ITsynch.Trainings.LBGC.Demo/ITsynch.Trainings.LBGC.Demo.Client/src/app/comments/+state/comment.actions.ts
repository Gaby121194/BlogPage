import { createAction, props } from '@ngrx/store';
import { Comment } from '../comment.model';

export const createComment = createAction(
  '[Comment] Create Comment',
  props<{ comment: Comment }>()
);

export const createCommentSucess = createAction(
  '[Comment] Create Comment Success',
  props<{ comment: Comment }>()
);

export const createCommentFailure = createAction(
  '[Comment] Create Comment Failure',
  props<{ error: any }>()
);

export const getAllCommentsByArticleId = createAction(
  '[Comment] Get all comment by id',
  props<{ IdArticle: number }>()
);

export const getAllCommentsByArticleIdSuccess = createAction(
  '[Comment] Get all comment by id success',
  props<{ comments: Comment[] }>()
);

export const getAllCommentsByArticleIdFailure = createAction(
  '[Comment] Get all comment by id failure',
  props<{ error: any }>()
);
