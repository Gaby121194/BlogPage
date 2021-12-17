
import { Action, createReducer, on } from '@ngrx/store';
import { Article } from '../articles.model';
import * as ArticlesActions from './articles.actions'

export const articlesFeatureKey = 'articles';

export interface ArticleState {
  currentArticleId: number | null;
  articles: Article[];
  lastArticleCreated: Article;
  lastArticleDeleted: Article;
  currentArticle: Article;
  apiState: 'idle' | 'loading' | 'error';
  error: any;
}

export const initialState: ArticleState = {
  currentArticleId: null,
  lastArticleCreated: null,
  currentArticle: null,
  lastArticleDeleted: null,
  articles: [],
  apiState: 'idle',
  error: null,
};

export const articlesReducer = createReducer<ArticleState,Action>(
  initialState,

  on(ArticlesActions.loadArticles, (state) => {
    return {...state, apiState: 'loading'};
  }),

  on(ArticlesActions.loadArticlesSuccess, (state, { articles }) => {
    return { ...state, articles: articles, apiState: "idle" };
  }),

  on(ArticlesActions.loadArticlesFailure, (state, {error}) => {
    return { ...state, error : error, apiState: "error"}
  }),

  on(ArticlesActions.getCurrentArticleById, (state, {articleId}) => {
    return {...state, apiState: 'loading', currentArticleId: articleId};
  }),

  on(ArticlesActions.getCurrentArticleByIdSuccess, (state, { article }) => {
    return { ...state, currentArticle: article, apiState: "idle" };
  }),

  on(ArticlesActions.getCurrentArticleByIdFailure, (state, {error}) => {
    return { ...state, error : error, apiState: "error", currentArticleId: null}
  }),

  on(ArticlesActions.createArticleSucess, (state, { article}) => {
    let _articles = state.articles.concat(article)
    return { ...state, articles: _articles , lastArticleCreated: article, apiState: "idle" };
  }),

  on(ArticlesActions.createArticle, (state) => ({
    ...state,
    apiState: 'loading',
  })),

  on(ArticlesActions.createArticleFailure, (state, {error}) => {
    return { ...state, error : error, apiState: "error"}
  }),

  on(ArticlesActions.deleteArticleSucess, (state, { article }) => {
    let _articles = state.articles.filter((art) => art.id !== article.id)
    return { ...state, articles: _articles, lastArticleDeleted: article, apiState: "idle" };
  }),

  on(ArticlesActions.deleteArticle, (state) => ({
    ...state,
    apiState: 'loading',
  })),

  on(ArticlesActions.deleteArticleFailure, (state, {error}) => {
    return { ...state, error : error, apiState: "error"}
  })

);

export function reducer(state, action) {
  return articlesReducer(state, action);
}
