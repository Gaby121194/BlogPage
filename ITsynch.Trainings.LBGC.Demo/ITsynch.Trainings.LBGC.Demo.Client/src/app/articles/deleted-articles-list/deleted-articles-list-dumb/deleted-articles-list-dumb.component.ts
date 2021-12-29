import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../models/articles.model';

@Component({
  selector: 'its-deleted-articles-list-dumb',
  templateUrl: './deleted-articles-list-dumb.component.html',
  styleUrls: ['./deleted-articles-list-dumb.component.css']
})
export class DeletedArticlesListDumbComponent implements OnInit {
  @Input() public deletedArticles: Article[];
  @Output() public restoreArticleClick = new EventEmitter<number>()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRestoreArticleClicked(id : number)
  {
    this.restoreArticleClick.emit(id)
  }

  backToArticles(){
    this.router.navigateByUrl("/articles")
  }

}
