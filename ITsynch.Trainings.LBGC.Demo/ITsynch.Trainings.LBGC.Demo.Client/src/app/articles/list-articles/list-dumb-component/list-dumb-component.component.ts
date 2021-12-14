import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../articles.model';

@Component({
  selector: 'its-list-dumb-component',
  templateUrl: './list-dumb-component.component.html',
  styleUrls: ['./list-dumb-component.component.css']
})
export class ListDumbComponentComponent implements OnInit, OnChanges {
  
  @Input()
  public articles: Article[];

  filterArticles: Article[];

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {}
  

  ngOnChanges(): void {
    this.filterArticles = this.articles;
  }

  searchArticle(input : string) 
  {
    this.filterArticles = this.articles;
    this.filterArticles = this.filterArticles.filter((article)=> article.title.toLowerCase().includes(input.toLowerCase()))
  }

  visitArticle(id: number){
    this.router.navigateByUrl(`articles/${id}`)
  }

  createArticle(){
    this.router.navigateByUrl(`articles/create`)
  }



}