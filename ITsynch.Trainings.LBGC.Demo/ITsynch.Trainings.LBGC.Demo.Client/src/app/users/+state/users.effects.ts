import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import {  of } from 'rxjs';

import * as UsersActions from './users.actions';
import { UsersService } from '../users.service';
import { Action } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UsersEffects implements OnInitEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      switchMap(() =>
        this.usersService.getUsers().pipe(
          map((users) => UsersActions.loadUsersSuccess({ users })),
          catchError((error) => of(UsersActions.loadUsersFailure({ error })))
        )
      )
    );
  });

  confirmNavbarUserChange$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.navbarCurrentUserChanges),
      map(({ newUserId }) => {
        const userChangeConfirmed = window.confirm('Are you sure you want to change users?');
        if (userChangeConfirmed) {
          return UsersActions.currentUserChangeConfirmed({ newUserId });
        }
      })
    );
  });

  loadUsersFailed$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(UsersActions.loadUsersFailure),
        tap((error) => {
          this.snackBar.open('Error in users loading', 'Close', {
            duration: 5000,
          });
        })
      );
    },
    { dispatch: false }
  );

  effectInitialized$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.effectInitialized),
      map(() => UsersActions.loadUsers()),
      take(1)
    );
  });

  ngrxOnInitEffects(): Action {
    return UsersActions.effectInitialized();
  }

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private snackBar: MatSnackBar
  ) {}
}
