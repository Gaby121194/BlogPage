import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { confirmDeleteArticle, loadFavoritesArticles } from '../+state/articles.actions';
import { getFavoritesArticles } from '../+state/articles.selectors';
import { getCurrentUser, getUsers } from '../../users/+state/users.selectors';
import { User } from '../../users/users.model';
import { Article } from '../models/articles.model';

@Component({
  selector: 'its-favorite-articles-list',
  templateUrl: './favorite-articles-list.component.html',
  styleUrls: ['./favorite-articles-list.component.css']
})
export class FavoriteArticlesListComponent implements OnInit {

  currentUser$: Observable<User> = this.store.pipe(select(getCurrentUser));
  users$: Observable<User[]> = this.store.pipe(select(getUsers))
  favoritesArticles$: Observable<Article[]> = this.store.pipe(select(getFavoritesArticles))

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void{
    this.store.dispatch(loadFavoritesArticles())
  }


  deleteArticle(event : number){
    this.store.dispatch(confirmDeleteArticle({articleId: event}))
  }

  navigateToEditArticle(id: number){
    this.router.navigateByUrl(`articles/edit/${id}`)
  }


}
