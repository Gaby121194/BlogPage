import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { navbarCurrentUserChanges } from '../../users/+state/users.actions';
import { getCurrentUser, getUsers } from '../../users/+state/users.selectors';
import { User } from '../../users/users.model';
import { select, Store } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';
import { getCommentsApiLoading } from '../+state/comment.selectors';
import { Comment } from '../comment.model';
import { ActivatedRoute } from '@angular/router';
import { createComment } from '../+state/comment.actions';

@Component({
  selector: 'its-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private store: Store, private activatedRoute: ActivatedRoute) { }

  public currentUser$: Observable<User> = this.store.pipe(select(getCurrentUser));
  commentForm = this.formBuilder.group({
    content: ["", [Validators.required, Validators.minLength(5)]],
    date: [new Date(), [Validators.required]]
  });
  currentUser: User;
  comment: Comment;
  commentCreating$: Observable<boolean> = this.store.pipe(select(getCommentsApiLoading));
  id: number;

  ngOnInit(): void {
    this.store.pipe(select(getCurrentUser)).subscribe(user => this.currentUser = user);
    this.id = this.activatedRoute.snapshot.params.id as number;
  }

  submitComment() {
    this.comment = this.commentForm.value;
    this.comment.user = this.currentUser;
    this.comment.IdArticle = this.id;
    this.store.dispatch(createComment({ comment: this.comment }));
    this.commentForm = this.formBuilder.group({
      content: ["", [Validators.required, Validators.minLength(5)]],
      date: [new Date(), [Validators.required]]
    });
  }
}
