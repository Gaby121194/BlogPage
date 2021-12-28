
import { Action, createReducer, on } from '@ngrx/store';
import { Article } from '../models/articles.model';
import * as ArticlesActions from './articles.actions'

export const articlesFeatureKey = 'articles';

export interface ArticleState {
  currentArticleId: number | null;
  articles: Article[];
  lastArticleCreated: Article;
  lastArticleDeleted: Article;
  favoritesArticles: Article[];
  deletedArticles: Article[],
  articleToEdit: Article;
  currentArticle: Article;
  apiState: 'idle' | 'loading' | 'error';
  error: any;
}

export const initialState: ArticleState = {
  currentArticleId: null,
  lastArticleCreated: null,
  currentArticle: null,
  lastArticleDeleted: null,
  articleToEdit: null,
  favoritesArticles: null,
  deletedArticles: null,
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

  on(ArticlesActions.createArticleSucess, (state, { article }) => {
    let _articles = [article, ...state.articles]
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
  }),

  on(ArticlesActions.editArticle, (state) => ({
    ...state,
    apiState: 'loading',
  })),

  on(ArticlesActions.editArticleSucess, (state, { article }) => {
    let _articles = state.articles.filter((art) => art.id !== article.id)
    _articles.unshift(article)
    return { ...state, articles: _articles, apiState: "idle" , articleToEdit: null};
  }),

  on(ArticlesActions.editArticleFailure, (state, {error}) => {
    return { ...state, error : error, apiState: "error", articleToEdit: null}
  }),

  on(ArticlesActions.getArticleToEdit, (state) => {
    return {...state, apiState: 'loading'};
  }),

  on(ArticlesActions.getArticleToEditSuccess, (state, { article }) => {
    return { ...state, articleToEdit: article, apiState: "idle" };
  }),

  on(ArticlesActions.getArticleToEditFailure, (state, {error}) => {
    return { ...state, error : error, apiState: "error"}
  }),

  on(ArticlesActions.filterArticles, (state) => {
    return {...state, apiState: 'loading'};
  }),

  on(ArticlesActions.filterArticlesSuccess, (state, { articles }) => {
    return { ...state, articles: articles, apiState: "idle" };
  }),

  on(ArticlesActions.markArticleAsFavorite, (state) => ({
    ...state,
    apiState: 'loading',
  })),

  on(ArticlesActions.markArticleAsFavoriteSuccess, (state, { article }) => {
    let _articles = state.articles.filter((art) => art.id !== article.id)
    let _favoritesArticles = state.favoritesArticles.filter((art) => art.id !== article.id)
    _articles.unshift(article)
    _favoritesArticles.unshift(article)
    return { ...state, articles: _articles, favoritesArticles: _favoritesArticles, apiState: "idle"};
  }),

  on(ArticlesActions.markArticleAsFavoriteFailure, (state, {error}) => {
    return { ...state, error : error, apiState: "error" }
  }),

  on(ArticlesActions.unmarkArticleAsFavorite, (state) => ({
    ...state,
    apiState: 'loading',
  })),

  on(ArticlesActions.unmarkArticleAsFavoriteSuccess, (state, { article }) => {
    let _favoritesArticles = state.favoritesArticles.filter((art) => art.id !== article.id)
    return { ...state, favoritesArticles: _favoritesArticles, apiState: "idle"};
  }),

  on(ArticlesActions.markArticleAsFavoriteFailure, (state, {error}) => {
    return { ...state, error : error, apiState: "error" }
  }),

  on(ArticlesActions.loadFavoritesArticles, (state) => {
    return {...state, apiState: 'loading'};
  }),

  on(ArticlesActions.loadFavoritesArticlesSuccess, (state, { articles }) => {
    return { ...state, favoritesArticles: articles, apiState: "idle" };
  }),

  on(ArticlesActions.loadFavoritesArticlesFailure, (state, {error}) => {
    return { ...state, error : error, apiState: "error"}
  }),

  on(ArticlesActions.loadDeletedArticles, (state) => {
    return {...state, apiState: 'loading'};
  }),

  on(ArticlesActions.loadDeletedArticlesSuccess, (state, { articles }) => {
    return { ...state, deletedArticles: articles, apiState: "idle" };
  }),

  on(ArticlesActions.loadDeletedArticlesFailure, (state, {error}) => {
    return { ...state, error : error, apiState: "error"}
  }),

  on(ArticlesActions.restoreDeletedArticle, (state) => {
    return {...state, apiState: 'loading'};
  }),

  on(ArticlesActions.restoreDeletedArticleSucess, (state, { article }) => {
    let _deletedArticles = state.deletedArticles.filter(art => art.id !== article.id);
    let _articles = [...state.articles, article];
    return { ...state, deletedArticles: _deletedArticles, articles: _articles, apiState: "idle" };
  }),

  on(ArticlesActions.restoreDeletedArticleFailure, (state, {error}) => {
    return { ...state, error : error, apiState: "error"}
  }),

);

export function reducer(state, action) {
  return articlesReducer(state, action);
}
