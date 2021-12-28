import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { confirmRestoredDeleteArticle, loadDeletedArticles } from '../+state/articles.actions';
import { getDeletedArticles } from '../+state/articles.selectors';
import { Article } from '../models/articles.model';

@Component({
  selector: 'its-deleted-articles-list',
  templateUrl: './deleted-articles-list.component.html',
  styleUrls: ['./deleted-articles-list.component.css']
})
export class DeletedArticlesListComponent implements OnInit {
  deletedArticles$: Observable<Article[]> = this.store.pipe(select(getDeletedArticles))
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadDeletedArticles())
  }

  restoreDeleteArticle(id: number){
    this.store.dispatch(confirmRestoredDeleteArticle({articleId: id}))
  }

}
