import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comments } from '../comments.model';
import { getAllComment } from '../+state/comment.selectors';
import { ActivatedRoute } from '@angular/router';
import { getAllCommentById } from '../+state/comment.actions'

@Component({
  selector: 'its-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {

  comment$: Observable<Comments> = this.store.pipe(select(getAllComment));

  constructor(private activatedRoute: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id as number;
    this.store.dispatch(getAllCommentById({ IdArticle: id }));
  }

}
