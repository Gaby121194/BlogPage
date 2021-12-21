import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, filter } from 'rxjs/operators';
import { confirmDeleteArticle, deleteArticle, filterArticles, loadArticles } from '../+state/articles.actions';
import { getArticles } from '../+state/articles.selectors';
import { getCurrentUser, getUsers } from '../../users/+state/users.selectors';
import { User } from '../../users/users.model';
import { Article } from '../models/articles.model';
import { Filter } from '../models/filter.model';

@Component({
  selector: 'its-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  articles$: Observable<Article[]> = this.store.pipe(select(getArticles));
  currentUser$: Observable<User> = this.store.pipe(select(getCurrentUser));
  users$: Observable<User[]> = this.store.pipe(select(getUsers))
  filter: Filter;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void{
    this.filter = {
      createdFrom: null,
      createdTo: null,
      searchAuthor: null,
      searchTitle: ""
    }
    this.store.dispatch(filterArticles({filter: this.filter}))
  }


  deleteArticle(event : number){
    this.store.dispatch(confirmDeleteArticle({articleId: event}))

  }

  navigateToEditArticle(id: number){
    this.router.navigateByUrl(`articles/create/${id}`)
  }

  filterArticles(filter: Filter){
    this.store.dispatch(filterArticles({filter}))
  }
  

}
