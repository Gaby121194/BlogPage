import { createAction, props } from '@ngrx/store';
import { Article } from '../articles.model';

export const loadArticless = createAction(
  '[Articles] Load Articless'
);

export const loadArticlessSuccess = createAction(
  '[Articles] Load Articless Success',
  props<{ data: any }>()
);

export const loadArticlessFailure = createAction(
  '[Articles] Load Articless Failure',
  props<{ error: any }>()
);

export const createArticle = createAction(
  '[Articles] Create Article',
  props< {article : Article}>()
);

export const createArticleSucess = createAction(
  '[Articles] Create Articles Success',
  props<{ article: Article }>()
);

export const createArticleFailure = createAction(
  '[Articles] Create Articles Failure',
  props<{ error: any }>()
);
