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

export const confirmDeleteComment = createAction(
  '[Comment] Confirm Delete Comment',
  props<{ CommentId: number}>()
);

export const deleteComment = createAction(
  '[Comment] Delete Comment',
  props<{ CommentId: number}>()
);

export const deleteCommentSucess = createAction(
  '[Comment] Delete Comment Success',
  props<{ comment: Comment }>()
);

export const deleteCommentFailure = createAction(
  '[Comment] Delete Comment Failure',
  props<{ error: any }>()
);


export const cancelAlert = createAction(
  '[Comment] Cancel alert'
);
