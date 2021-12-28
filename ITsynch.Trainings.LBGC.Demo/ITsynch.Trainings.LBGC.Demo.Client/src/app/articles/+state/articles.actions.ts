import { createAction, props } from '@ngrx/store';
import { User } from '../../users/users.model';
import { Article } from '../models/articles.model';
import { Filter } from '../models/filter.model';

export const effectInitialized = createAction('[Articles] Articles effect initialized');

export const loadArticles = createAction(
  '[Articles] Load Articles'
);

export const loadArticlesSuccess = createAction(
  '[Articles] Load Articles Success',
  props<{ articles: Article[] }>()
);

export const loadArticlesFailure = createAction(
  '[Articles] Load Articles Failure',
  props<{ error: any }>()
);

export const createArticle = createAction(
  '[Articles] Create Article',
  props< {article : Article}>()
);

export const createArticleSucess = createAction(
  '[Articles] Create Article Success',
  props<{ article: Article }>()
);

export const createArticleFailure = createAction(
  '[Articles] Create Article Failure',
  props<{ error: any }>()
);

export const getArticleToEdit = createAction(
  '[Articles] Get article to edit by id',
  props<{ articleId: number }>()
);

export const getArticleToEditSuccess = createAction(
  '[Articles] Get article to edit by id success',
  props<{ article: Article }>()
);

export const getArticleToEditFailure = createAction(
  '[Articles] Get article to edit by id failure',
  props<{ error: any }>()
);

export const editArticle = createAction(
  '[Articles] Edit Article',
  props< {article : Article, articleId: number}>()
);

export const editArticleSucess = createAction(
  '[Articles] Edit Article Success',
  props<{ article: Article }>()
);

export const editArticleFailure = createAction(
  '[Articles] Edit Article Failure',
  props<{ error: any }>()
);

export const deleteArticle = createAction(
  '[Articles] Delete Article',
  props< {articleId : number}>()
);

export const confirmDeleteArticle = createAction(
  '[Articles] Delete Confirm Article',
  props< {articleId : number}>()
);

export const deleteArticleSucess = createAction(
  '[Articles] Delete Article Success',
  props<{ article: Article }>()
);

export const deleteArticleFailure = createAction(
  '[Articles] Delete Article Failure',
  props<{ error: any }>()
);

export const getCurrentArticleById = createAction(
  '[Articles] Get current article by id',
  props<{ articleId: number }>()
);

export const getCurrentArticleByIdSuccess = createAction(
  '[Articles] Get current article by id success',
  props<{ article: Article }>()
);

export const getCurrentArticleByIdFailure = createAction(
  '[Articles] Get current article by id failure',
  props<{ error: any }>()
);

export const filterArticles = createAction(
  '[Articles] Filter articles',
  props<{ filter: Filter }>()
);

export const filterArticlesSuccess = createAction(
  '[Articles] Filter articles success',
  props<{ articles: Article[] }>()
);

export const filterArticlesFailure = createAction(
  '[Articles] Filter articles failure',
  props<{ error: any }>()
);

export const loadFavoritesArticles = createAction(
  '[Articles] Load favorites articles'
);

export const loadFavoritesArticlesSuccess = createAction(
  '[Articles] Load favorites articles success',
  props<{ articles: Article[] }>()
);

export const loadFavoritesArticlesFailure = createAction(
  '[Articles] Load favorites articles failure',
  props<{ error: any }>()
);

export const markArticleAsFavorite = createAction(
  '[Articles] Mark article as favorite',
  props<{ userId: number, articleId: number }>()
);

export const markArticleAsFavoriteSuccess = createAction(
  '[Articles] Mark article as favorite success',
  props<{ article: Article }>()
);

export const markArticleAsFavoriteFailure = createAction(
  '[Articles] Mark article as favorite failure',
  props<{ error: any }>()
);

export const unmarkArticleAsFavorite = createAction(
  '[Articles] Unmark article as favorite',
  props<{ userId: number, articleId: number }>()
);

export const unmarkArticleAsFavoriteSuccess = createAction(
  '[Articles] Unmark article as favorite success',
  props<{ article: Article }>()
);

export const unmarkArticleAsFavoriteFailure = createAction(
  '[Articles] Unmark article as favorite failure',
  props<{ error: any }>()
);

export const loadDeletedArticles = createAction(
  '[Articles] Load deleted articles'
);

export const loadDeletedArticlesSuccess = createAction(
  '[Articles] Load deleted articles success',
  props<{ articles: Article[] }>()
);

export const loadDeletedArticlesFailure = createAction(
  '[Articles] Load deleted articles failure',
  props<{ error: any }>()
);

export const restoreDeletedArticle = createAction(
  '[Articles] Restore deleted Article',
  props< {articleId : number}>()
);

export const confirmRestoredDeleteArticle = createAction(
  '[Articles] Restore Confirm deleted Article',
  props< {articleId : number}>()
);

export const restoreDeletedArticleSucess = createAction(
  '[Articles] Restore delete Article Success',
  props<{ article: Article }>()
);

export const restoreDeletedArticleFailure = createAction(
  '[Articles] Restore deleted Article Failure',
  props<{ error: any }>()
);
