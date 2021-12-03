import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';

export const selectUserState = createFeatureSelector<fromUsers.UsersState>(
  fromUsers.usersFeatureKey
);

export const getUsers = createSelector(selectUserState, (state) => state.users);

export const getCurrentUserId = createSelector(selectUserState, (state) => state.currentUserId);

export const getCurrentUser = createSelector(getUsers, getCurrentUserId, (users, currentUserId) => {
  return users?.find((x) => x.id === currentUserId);
});

export const getUsersApiLoading = createSelector(
  selectUserState,
  (state) => state.apiState === 'loading'
);

export const getUsersApiIdle = createSelector(
  selectUserState,
  (state) => state.apiState === 'idle'
);

export const getUsersApiErrored = createSelector(
  selectUserState,
  (state) => state.apiState === 'error'
);

export const getUsersApiError = createSelector(selectUserState, (state) => state.error);
