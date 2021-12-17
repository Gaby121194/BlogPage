import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { confirmDeleteArticle, deleteArticle, deleteConfirmArticle, getCurrentArticleById, loadArticles } from '../+state/articles.actions';
import { getCurrentArticle } from '../+state/articles.selectors';
import { getCurrentUser } from '../../users/+state/users.selectors';
import { User } from '../../users/users.model';
import { Article } from '../articles.model';

@Component({
  selector: 'its-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  article$: Observable<Article> = this.store.pipe(select(getCurrentArticle))
  currentUser$: Observable<User> = this.store.pipe(select(getCurrentUser))
  
  constructor(private activatedRoute: ActivatedRoute, private store: Store, private router: Router) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id as number
    this.store.dispatch(getCurrentArticleById({articleId: id}))
    
  }

  deleteArticle(event : number){
    this.store.dispatch(confirmDeleteArticle({articleId : event}))
    this.router.navigateByUrl("/articles")
  }


}
