import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../models/articles.model';

@Component({
  selector: 'its-draft-articles-list-dumb',
  templateUrl: './draft-articles-list-dumb.component.html',
  styleUrls: ['./draft-articles-list-dumb.component.css']
})
export class DraftArticlesListDumbComponent implements OnInit {
  @Input() public draftArticles: Article[];

  @Output() postDraftArticleClick = new EventEmitter<number>();

  @Output() deleteDraftArticleClick = new EventEmitter<number>();
  
  @Output() editDraftArticleClick = new EventEmitter<number>();
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDeleteDraftArticleClicked(id: number){
    this.deleteDraftArticleClick.emit(id);
  }

  onEditDraftArticleClicked(id: number){
    this.editDraftArticleClick.emit(id);
  }

  onPostDraftArticleClicked(id: number){
    this.postDraftArticleClick.emit(id);
  }

  backToArticles(){
    this.router.navigateByUrl("/articles")
  }

}
