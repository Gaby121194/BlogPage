import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUsers, getUsersApiLoading } from '../+state/users.selectors';
import { User } from '../users.model';

@Component({
  selector: 'its-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css'],
})
export class UsersHomeComponent implements OnInit {
  users$: Observable<User[]> = this.store.pipe(select(getUsers));
  usersLoading$: Observable<boolean> = this.store.pipe(select(getUsersApiLoading));

  displayedColumns = ['id', 'username', 'firstName', 'lastName'];

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
