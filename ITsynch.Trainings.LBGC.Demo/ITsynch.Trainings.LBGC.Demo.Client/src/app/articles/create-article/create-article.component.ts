import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { createArticle, editArticle, getArticleToEdit } from '../+state/articles.actions';
import { getArticlesApiLoading, getArticleEdit, getCurrentArticle } from '../+state/articles.selectors';
import { getCurrentUser } from '../../users/+state/users.selectors';
import { User } from '../../users/users.model';
import { Article } from '../models/articles.model';

@Component({
  selector: 'its-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  article$ : Observable<Article>;
  articleForm: FormGroup;
  article : Article;
  currentUser$: Observable<User> = this.store.pipe(select(getCurrentUser));
  articleToEdit$: Observable<Article> = this.store.pipe(select(getArticleEdit));
  articleCreating$: Observable<boolean> = this.store.pipe(select(getArticlesApiLoading));

  constructor(
            private store: Store,
            private router: Router,
            private activeRoute: ActivatedRoute) {
      
   }

  ngOnInit(): void {
     
     let id = this.activeRoute.snapshot.params.id as number
     if(id){
      this.store.dispatch(getArticleToEdit({articleId: id}))

     }
    
  }

   createArticle(article : Article)
  {
    this.store.dispatch(createArticle({ article: article }));
    this.router.navigateByUrl("/articles")
  }

  editArticle(art: Article)
  {
    this.store.dispatch(editArticle({articleId: art.id, article: art}))
    this.router.navigateByUrl("/articles")
  }


}
