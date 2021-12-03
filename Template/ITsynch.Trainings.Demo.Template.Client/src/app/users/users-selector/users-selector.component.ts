import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { navbarCurrentUserChanges } from '../+state/users.actions';
import { getCurrentUser, getUsers } from '../+state/users.selectors';
import { User } from '../users.model';

@Component({
  selector: 'its-users-selector',
  templateUrl: './users-selector.component.html',
  styleUrls: ['./users-selector.component.css'],
})
export class UsersSelectorComponent implements OnInit {
  public users$: Observable<User[]> = this.store.pipe(select(getUsers));
  public currentUser$: Observable<User> = this.store.pipe(select(getCurrentUser));

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onUserClicked(user: User) {
    this.store.dispatch(navbarCurrentUserChanges({ newUserId: user.id }));
  }
}
