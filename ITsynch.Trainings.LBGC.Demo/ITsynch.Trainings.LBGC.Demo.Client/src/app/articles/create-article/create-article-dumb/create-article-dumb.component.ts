import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../users/users.model';
import { Article } from '../../models/articles.model';

@Component({
  selector: 'its-create-article-dumb',
  templateUrl: './create-article-dumb.component.html',
  styleUrls: ['./create-article-dumb.component.css']
})
export class CreateArticleDumbComponent implements OnInit {
  @Input() currentUser: User;
  @Output() createClick = new EventEmitter<Article>();
  @Output() createDraftClick = new EventEmitter<Article>();
  articleForm: FormGroup = this.formBuilder.group({
    title: ["", [Validators.required]],
    content: ["", [Validators.required, Validators.minLength(5)]],
    date: [ new Date() , [Validators.required]],
    category: ["", [Validators.required]]
  });
  draftArticle = false;
  article: Article;
  @Input() articleCreating: boolean;
  @Input() draftArticleCreating: boolean;
 
  categories: string[] = ['Economy', 'Culture', 'Politics', 'Cooking','Entertainment', 'Research'];
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

  }
  articleClick(): void {
    this.draftArticle = false;
  }

  draftArticleClick(): void {
    this.draftArticle = true;
  }

  onSubmitClicked(){
    this.article = this.articleForm.value;
    this.article.user = this.currentUser;
    this.article.date = new Date();
    if (this.draftArticle){
      this.createDraftClick.emit(this.article)
    } else {
      this.createClick.emit(this.article)
    }
    this.articleForm.setValue({
      title: '',
      content: '',
      category: '',
      date: null
    })
  }

  backToArticles(){
    this.router.navigateByUrl("/articles")
  }

 

}
