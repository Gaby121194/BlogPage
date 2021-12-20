import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Comment } from '../comment.model';
import { getAllComments } from '../+state/comment.selectors';
import { ActivatedRoute } from '@angular/router';
import { getAllCommentsByArticleId } from '../+state/comment.actions'
import { CommentsService } from '../comments.service';

@Component({
  selector: 'its-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {

  comments$: Observable<Comment[]> = this.store.pipe(select(getAllComments));
  suscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private store: Store, private commentService: CommentsService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id as number;
    this.store.dispatch(getAllCommentsByArticleId({ IdArticle: id }));
    this.suscription = this.commentService.refresh$.subscribe(() => {
      let id = this.activatedRoute.snapshot.params.id as number;
      this.store.dispatch(getAllCommentsByArticleId({ IdArticle: id }));
    })
  }

}
