import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { confirmDeleteArticle, deleteArticle, loadArticles } from '../+state/articles.actions';
import { getArticles } from '../+state/articles.selectors';
import { getCurrentUser } from '../../users/+state/users.selectors';
import { User } from '../../users/users.model';
import { Article } from '../articles.model';

@Component({
  selector: 'its-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  articles$: Observable<Article[]> = this.store.pipe(select(getArticles));
  currentUser$: Observable<User> = this.store.pipe(select(getCurrentUser))

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void{
  }


  deleteArticle(event : number){
    this.store.dispatch(confirmDeleteArticle({articleId: event}))

  }

  navigateToEditArticle(id: number){
    this.router.navigateByUrl(`articles/edit/${id}`)
  }
  

}
