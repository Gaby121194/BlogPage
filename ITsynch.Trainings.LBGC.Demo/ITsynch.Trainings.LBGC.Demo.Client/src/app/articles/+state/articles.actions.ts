import { createAction, props } from '@ngrx/store';
import { Article } from '../articles.model';

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
