import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadArticles } from '../+state/articles.actions';
import { getArticles } from '../+state/articles.selectors';
import { Article } from '../articles.model';

@Component({
  selector: 'its-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  articles$: Observable<Article[]> = this.store.pipe(select(getArticles));

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadArticles())
  }

  

}
