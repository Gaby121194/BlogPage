import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromArticles from './articles.reducer';

export const selectUserState = createFeatureSelector<fromArticles.ArticleState>(
    fromArticles.articlesFeatureKey
  );
  
  export const getArticles = createSelector(selectUserState, (state) => state.articles);
  
  export const getCurrentArticleId = createSelector(selectUserState, (state) => state.currentArticleId);
  
  export const getCurrentArticle = createSelector(selectUserState, (state) => state.currentArticle);

  export const getArticleEdit = createSelector(selectUserState, (state) => state.articleToEdit);

  
  export const getArticlesApiLoading = createSelector(
    selectUserState,
    (state) => state.apiState === 'loading'
  );
  
  export const getArticlesApiIdle = createSelector(
    selectUserState,
    (state) => state.apiState === 'idle'
  );
  
  export const getArticlesApiErrored = createSelector(
    selectUserState,
    (state) => state.apiState === 'error'
  );
  
  export const getArticlesApiError = createSelector(selectUserState, (state) => state.error);