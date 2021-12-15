import { createAction, props } from '@ngrx/store';
import { Comments } from '../comments.model';

export const createComment = createAction(
  '[Comment] Create Comment',
  props<{ comment: Comments }>()
);

export const createCommentSucess = createAction(
  '[Comment] Create Comment Success',
  props<{ comment: Comments }>()
);

export const createCommentFailure = createAction(
  '[Comment] Create Comment Failure',
  props<{ error: any }>()
);

export const getAllCommentById = createAction(
  '[Comment] Get all comment by id',
  props<{ IdArticle: number }>()
);

export const getAllCommentByIdSuccess = createAction(
  '[Comment] Get all comment by id success',
  props<{ comment: Comments }>()
);

export const getAllCommentByIdFailure = createAction(
  '[Comment] Get all comment by id failure',
  props<{ error: any }>()
);
