import { Action, createReducer, on } from '@ngrx/store';
import { Comment } from '../comment.model';
import * as CommentActions from './comment.actions'

export const commentFeatureKey = 'comment';

export interface CommentState {
  currentArticleId: number | null;
  lastCommentCreated: Comment;
  lastCommentDeleted: Comment;
  allComments: Comment[];
  apiState: 'idle' | 'loading' | 'error';
  error: any;
}

export const initialState: CommentState = {
  currentArticleId: null,
  lastCommentCreated: null,
  lastCommentDeleted: null,
  allComments: [],
  apiState: 'idle',
  error: null,
};

export const commentReducer = createReducer<CommentState, Action>(
  initialState,

  on(CommentActions.createCommentSucess, (state, { comment }) => {
    return { ...state, lastCommentCreated: comment, apiState: "idle" };
  }),

  on(CommentActions.createComment, (state) => ({
    ...state,
    apiState: 'loading',
  })),

  on(CommentActions.createCommentFailure, (state, { error }) => {
    return { ...state, error: error, apiState: "error" }
  }),

  on(CommentActions.getAllCommentsByArticleId, (state, { IdArticle }) => {
    return { ...state, apiState: 'loading', currentArticleId: IdArticle };
  }),

  on(CommentActions.getAllCommentsByArticleIdSuccess, (state, { comments }) => {
    return { ...state, allComments: comments, apiState: "idle" };
  }),

  on(CommentActions.getAllCommentsByArticleIdFailure, (state, { error }) => {
    return { ...state, error: error, apiState: "error", currentArticleId: null }
  }),

  on(CommentActions.deleteCommentSucess, (state, { comment }) => {
    let _comments = state.allComments.filter((comment) => comment.id !== comment.id)
    return { ...state, comments: _comments, lastCommentDeleted: comment, apiState: "idle" };
  }),

  on(CommentActions.deleteComment, (state) => ({
    ...state,
    apiState: 'loading',
  })),

  on(CommentActions.deleteCommentFailure, (state, {error}) => {
    return { ...state, error : error, apiState: "error"}
  }),


);

export function reducer(state, action) {
  return commentReducer(state, action);
}
