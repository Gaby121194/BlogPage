import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getCurrentUser } from '../../users/+state/users.selectors';
import { User } from '../../users/users.model';
import { select, Store } from '@ngrx/store';
import { getCommentsApiLoading } from '../+state/comment.selectors';
import { Comment } from '../comment.model';
import { createComment } from '../+state/comment.actions';

@Component({
  selector: 'its-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  constructor(private store: Store, ) { }

  currentUser$: Observable<User> = this.store.pipe(select(getCurrentUser));
  commentCreating$: Observable<boolean> = this.store.pipe(select(getCommentsApiLoading));

  ngOnInit(): void {
  }

  createComment(comment: Comment){
    this.store.dispatch(createComment({ comment: comment }));
  }
  
}
