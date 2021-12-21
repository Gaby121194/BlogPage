import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromComment from './comment.reducer';

export const selectCommentState = createFeatureSelector<fromComment.CommentState>(
  fromComment.commentFeatureKey
);

export const getCommentCreated = createSelector(selectCommentState, (state) => state.lastCommentCreated);

export const getAllComments = createSelector(selectCommentState, (state) => state.allComments);

export const getCommentsApiLoading = createSelector(
  selectCommentState,
  (state) => state.apiState === 'loading'
);

export const getCommentsApiIdle = createSelector(
  selectCommentState,
  (state) => state.apiState === 'idle'
);

export const getCommentsApiErrored = createSelector(
  selectCommentState,
  (state) => state.apiState === 'error'
);

export const getCommentsApiError = createSelector(
  selectCommentState, (state) => state.error
);
