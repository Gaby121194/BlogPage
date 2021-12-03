import { createAction, props } from '@ngrx/store';
import { User } from '../users.model';

export const effectInitialized = createAction('[Users] users effect initialized');

export const navbarCurrentUserChanges = createAction(
  '[Navbar] Change current user',
  props<{ newUserId: number }>()
);

export const currentUserChangeConfirmed = createAction(
  '[Users] Current user change confirmed',
  props<{ newUserId: number }>()
);

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction('[Users] Load Users Failure', props<{ error: any }>());
