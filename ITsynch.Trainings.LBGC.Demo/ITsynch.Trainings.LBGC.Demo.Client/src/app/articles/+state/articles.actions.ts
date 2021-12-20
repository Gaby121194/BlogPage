import { createAction, props } from '@ngrx/store';
import { Article } from '../articles.model';

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
