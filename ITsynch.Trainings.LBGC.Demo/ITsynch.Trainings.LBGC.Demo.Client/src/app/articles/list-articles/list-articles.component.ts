import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { confirmDeleteArticle, filterArticles, loadFavoritesArticles } from '../+state/articles.actions';
import { getArticles, getFavoritesArticles } from '../+state/articles.selectors';
import { getCurrentUser, getUsers } from '../../users/+state/users.selectors';
import { User } from '../../users/users.model';
import { Article } from '../models/articles.model';
import { Filter } from '../models/filter.model';

@Component({
  selector: 'its-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListArticlesComponent implements OnInit, OnChanges {
  articles$: Observable<Article[]> = this.store.pipe(select(getArticles));
  currentUser$: Observable<User> = this.store.pipe(select(getCurrentUser));
  users$: Observable<User[]> = this.store.pipe(select(getUsers))
  favoritesArticles$: Observable<Article[]> = this.store.pipe(select(getFavoritesArticles))
  filter: Filter;
  currentUser: User;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void{
    this.filter = {
      createdFrom: null,
      createdTo: null,
      searchAuthor: null,
      searchTitle: "",
      category: null,
    }
    this.store.dispatch(filterArticles({filter: this.filter}))
    this.store.dispatch(loadFavoritesArticles()) 
  }
  
  ngOnChanges(): void {
  }


  deleteArticle(event : number){
    this.store.dispatch(confirmDeleteArticle({articleId: event}))
  }

  navigateToEditArticle(id: number){
    this.router.navigateByUrl(`articles/edit/${id}`)
  }

  filterArticles(filter: Filter){
    this.store.dispatch(filterArticles({filter}))
  }
  

}
