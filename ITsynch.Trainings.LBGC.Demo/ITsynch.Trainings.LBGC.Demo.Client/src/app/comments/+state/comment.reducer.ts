import { Action, createReducer, on } from '@ngrx/store';
import { Comments } from '../comments.model';
import * as CommentActions from './comment.actions'

export const commentFeatureKey = 'comment';

export interface CommentState {
  currentArticleId: number | null;
  comment: Comments[];
  commentCreated: Comments;
  allComment: Comments;
  apiState: 'idle' | 'loading' | 'error';
  error: any;
}

export const initialState: CommentState = {
  currentArticleId: null,
  comment: [],
  commentCreated: null,
  allComment: null,
  apiState: 'idle',
  error: null,
};

export const commentReducer = createReducer<CommentState, Action>(
  initialState,

  on(CommentActions.createCommentSucess, (state, { comment }) => {
    return { ...state, commentCreated: comment, apiState: "idle" };
  }),

  on(CommentActions.createComment, (state) => ({
    ...state,
    apiState: 'loading',
  })),

  on(CommentActions.createCommentFailure, (state, { error }) => {
    return { ...state, error: error, apiState: "error" }
  }),

  on(CommentActions.getAllCommentById, (state, { IdArticle }) => {
    return { ...state, apiState: 'loading', currentArticleId: IdArticle };
  }),

  on(CommentActions.getAllCommentByIdSuccess, (state, { comment }) => {
    return { ...state, currentComment: comment, apiState: "idle" };
  }),

  on(CommentActions.getAllCommentByIdFailure, (state, { error }) => {
    return { ...state, error: error, apiState: "error", currentArticleId: null }
  }),

);

export function reducer(state, action) {
  return commentReducer(state, action);
}
