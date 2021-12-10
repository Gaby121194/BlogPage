import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createArticle } from '../+state/articles.actions';
import { getCurrentUser } from '../../users/+state/users.selectors';
import { User } from '../../users/users.model';
import { Article } from '../articles.model';

@Component({
  selector: 'its-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  articleForm = this.fb.group({
    title: ["", [Validators.required]],
    content: ["", [Validators.required, Validators.minLength(5)]],
    date: [ new Date() , [Validators.required]]
  });
  article$ : Observable<Article>;
  article : Article;
  currentUser: User;

  constructor(private fb: FormBuilder, 
            private store: Store) {
      
   }

  ngOnInit(): void {
     this.store.pipe(select(getCurrentUser)).subscribe(user => this.currentUser = user)
    
  }

   submitArticle()
  {
    this.article = this.articleForm.value;
    this.article.username = this.currentUser.username;
    this.store.dispatch(createArticle({ article: this.article }));
  }

}
