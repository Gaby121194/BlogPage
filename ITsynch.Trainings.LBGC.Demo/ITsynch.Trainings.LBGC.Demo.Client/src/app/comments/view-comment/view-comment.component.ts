import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Comment } from '../comment.model';
import { getAllComments } from '../+state/comment.selectors';
import { ActivatedRoute } from '@angular/router';
import { confirmDeleteComment, getAllCommentsByArticleId } from '../+state/comment.actions'
import { CommentsService } from '../comments.service';
import { User } from 'src/app/users/users.model';
import { getCurrentUser } from 'src/app/users/+state/users.selectors';

@Component({
  selector: 'its-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {

  comments$: Observable<Comment[]> = this.store.pipe(select(getAllComments));
  suscription: Subscription;
  currentUser$: Observable<User> = this.store.pipe(select(getCurrentUser))

  constructor(private activatedRoute: ActivatedRoute, private store: Store, 
  private commentService: CommentsService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id as number;
    this.store.dispatch(getAllCommentsByArticleId({ IdArticle: id }));
    this.suscription = this.commentService.refresh$.subscribe(() => {
      let id = this.activatedRoute.snapshot.params.id as number;
      this.store.dispatch(getAllCommentsByArticleId({ IdArticle: id }));
    })
   
  }
  
  deleteComment(event : number){
    this.store.dispatch(confirmDeleteComment({CommentId: event}));
    this.suscription = this.commentService.refresh$.subscribe(() => {
      let id = this.activatedRoute.snapshot.params.id as number;
      this.store.dispatch(getAllCommentsByArticleId({ IdArticle: id }));
    })
  }
}
