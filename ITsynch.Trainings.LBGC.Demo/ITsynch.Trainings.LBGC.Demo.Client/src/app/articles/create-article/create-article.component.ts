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
import { Article } from '../articles.model';

@Component({
  selector: 'its-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  article$ : Observable<Article>;
  articleForm: FormGroup;
  currentUser$: Observable<User> = this.store.pipe(select(getCurrentUser));
  articleCreating$: Observable<boolean> = this.store.pipe(select(getArticlesApiLoading));

  constructor(
            private store: Store,
            private router: Router) {
      
   }

  ngOnInit(): void {
    
  }

   createArticle(article : Article)
  {
    this.store.dispatch(createArticle({ article: article }));
    this.router.navigateByUrl("/articles")
  }




}
