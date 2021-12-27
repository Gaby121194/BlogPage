import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { editArticle, getArticleToEdit } from '../+state/articles.actions';
import { getArticleEdit } from '../+state/articles.selectors';
import { Article } from '../models/articles.model';

@Component({
  selector: 'its-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  articleToEdit$: Observable<Article> = this.store.pipe(select(getArticleEdit));

  constructor(private store: Store, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activedRoute.snapshot.params.id
    this.store.dispatch(getArticleToEdit({articleId: id}))
  }

  editArticle(art: Article)
  {
    this.store.dispatch(editArticle({articleId: art.id, article: art}))
    this.router.navigateByUrl("/articles")
  }

}
