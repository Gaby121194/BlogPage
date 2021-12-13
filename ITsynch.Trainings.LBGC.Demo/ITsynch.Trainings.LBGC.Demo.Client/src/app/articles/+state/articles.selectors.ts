import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromArticles from './articles.reducer';

export const selectUserState = createFeatureSelector<fromArticles.ArticleState>(
    fromArticles.articlesFeatureKey
  );
  
  export const getArticles = createSelector(selectUserState, (state) => state.articles);
  
//   export const getCurrentArticleId = createSelector(selectUserState, (state) => state.currentUserId);
  
//   export const getCurrentArticle = createSelector(getArticles, getCurrentArticleId, (users, currentUserId) => {
//     return users?.find((x) => x.id === currentUserId);
//   });
  
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