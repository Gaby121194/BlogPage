import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromComment from './comment.reducer';

export const selectCommentState = createFeatureSelector<fromComment.CommentState>(
  fromComment.commentFeatureKey
);

export const getComments = createSelector(selectCommentState, (state) => state.comment);

export const getCommentsById = createSelector(selectCommentState, (state) => state.currentArticleId);

export const getAllComment = createSelector(selectCommentState, (state) => state.allComment);


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
