import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../users.model';
import * as UsersActions from './users.actions';

export const usersFeatureKey = 'users';

export interface UsersState {
  currentUserId: number | null;
  users: User[];
  apiState: 'idle' | 'loading' | 'error';
  error: any;
}

export const initialState: UsersState = {
  currentUserId: null,
  users: [],
  apiState: 'idle',
  error: null,
};

const usersReducer = createReducer<UsersState, Action>(
  initialState,

  on(UsersActions.currentUserChangeConfirmed, (state, { newUserId }) => {
    return { ...state, currentUserId: newUserId };
  }),

  on(UsersActions.loadUsers, (state) => ({
    ...state,
    apiState: 'loading',
  })),

  on(UsersActions.loadUsersSuccess, (state, { users }) => {
    const currentUserId = state.currentUserId ?? users[0].id;

    return {
      ...state,
      apiState: 'idle',
      currentUserId,
      users,
    };
  }),

  on(UsersActions.loadUsersFailure, (state, { error }) => {
    return {
      ...state,
      error,
      apiState: 'error',
    };
  })
);

export function reducer(state, action) {
  return usersReducer(state, action);
}
