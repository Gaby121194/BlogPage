import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from '../models/articles.model';
import { getDraftArticles } from '../+state/articles.selectors';
import { confirmDeleteArticle, confirmPostDraftArticle, loadDraftArticles, postDraftArticle } from '../+state/articles.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'its-draft-articles',
  templateUrl: './draft-articles.component.html',
  styleUrls: ['./draft-articles.component.css']
})
export class DraftArticlesComponent implements OnInit {
  draftArticles$: Observable<Article[]> = this.store.pipe(select(getDraftArticles))

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(loadDraftArticles())
  }

  deleteDraftArticle(event : number){
    this.store.dispatch(confirmDeleteArticle({articleId: event}))
  }
  
  postDraftArticle(event : number){
    this.store.dispatch(confirmPostDraftArticle({articleId: event}))
  }

  editDraftArticle(id: number){
    this.router.navigateByUrl(`articles/edit/${id}`)
  }
}
