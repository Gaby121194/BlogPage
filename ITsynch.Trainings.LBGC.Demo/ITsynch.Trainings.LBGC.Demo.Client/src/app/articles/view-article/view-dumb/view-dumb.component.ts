import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../users/users.model';
import { Article } from '../../models/articles.model';

@Component({
  selector: 'its-view-dumb',
  templateUrl: './view-dumb.component.html',
  styleUrls: ['./view-dumb.component.css']
})
export class ViewDumbComponent implements OnInit{
  @Input() public article: Article;

  @Input() public currentUser: User;

  @Output() deleteArticleClick = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDeleteArticleClicked(id: number){
    this.deleteArticleClick.emit(id);
  }
  
  backToArticles(){
    this.router.navigateByUrl("/articles")
  }

}
