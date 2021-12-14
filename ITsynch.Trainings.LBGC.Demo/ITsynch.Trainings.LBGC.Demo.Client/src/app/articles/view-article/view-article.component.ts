import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCurrentArticleById } from '../+state/articles.actions';
import { getCurrentArticle } from '../+state/articles.selectors';
import { Article } from '../articles.model';

@Component({
  selector: 'its-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  article$: Observable<Article> = this.store.pipe(select(getCurrentArticle))

  constructor(private activatedRoute: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id as number
    this.store.dispatch(getCurrentArticleById({articleId: id}))
    
  }

}
