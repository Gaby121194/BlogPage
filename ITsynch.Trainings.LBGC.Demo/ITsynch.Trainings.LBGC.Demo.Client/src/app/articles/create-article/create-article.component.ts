import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createArticle } from '../+state/articles.actions';
import { getArticlesApiLoading } from '../+state/articles.selectors';
import { getCurrentUser } from '../../users/+state/users.selectors';
import { User } from '../../users/users.model';
import { Article } from '../articles.model';

@Component({
  selector: 'its-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  articleForm = this.formBuilder.group({
    title: ["", [Validators.required]],
    content: ["", [Validators.required, Validators.minLength(5)]],
    date: [ new Date() , [Validators.required]]
  });
  article$ : Observable<Article>;
  article : Article;
  currentUser: User;
  articleCreating$: Observable<boolean> = this.store.pipe(select(getArticlesApiLoading));

  constructor(private formBuilder: FormBuilder, 
            private store: Store) {
      
   }

  ngOnInit(): void {
     this.store.pipe(select(getCurrentUser)).subscribe(user => this.currentUser = user)
    
  }

   submitArticle()
  {
    this.article = this.articleForm.value;
    this.article.userName = this.currentUser.username;
    this.store.dispatch(createArticle({ article: this.article }));
  }

}
