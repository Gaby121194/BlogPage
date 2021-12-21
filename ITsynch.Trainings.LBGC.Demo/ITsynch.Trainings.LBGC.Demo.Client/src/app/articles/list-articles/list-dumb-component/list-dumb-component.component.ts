import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../users/users.model';
import { Article } from '../../models/articles.model';
import { Filter } from '../../models/filter.model';

@Component({
  selector: 'its-list-dumb-component',
  templateUrl: './list-dumb-component.component.html',
  styleUrls: ['./list-dumb-component.component.css']
})
export class ListDumbComponentComponent implements OnInit, OnChanges {
  
  @Input()
  public articles: Article[];

  @Input()
  public currentUser: User;

  @Output() deleteArticleClick = new EventEmitter<number>();
  
  @Output() editArticleClick = new EventEmitter<number>();

  @Output() filterClick= new EventEmitter<Filter>();

  filterArticles: Filter; 
  filterForm: FormGroup = this.formBuilder.group({
    searchTitle: [""],
    searchAuthors: [null],
    minDate: [],
    maxDate: []
  })
  @Input()
  public users: User[];

  constructor(private router: Router, private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    
  }
  

  ngOnChanges(): void {
  }


  visitArticle(id: number){
    this.router.navigateByUrl(`articles/${id}`)
  }

  createArticle(){
    this.router.navigateByUrl(`articles/create`)
  }

  onDeleteArticleClicked(id: number){
    this.deleteArticleClick.emit(id);
  }

  onEditArticleClicked(id: number){
    this.editArticleClick.emit(id);
  }


  onFilterClicked(){
    this.filterClick.emit(this.filterForm.value);
  }

  cleanFilter(){
    this.filterForm.reset()
    this.filterClick.emit(this.filterForm.value);
  }



}
