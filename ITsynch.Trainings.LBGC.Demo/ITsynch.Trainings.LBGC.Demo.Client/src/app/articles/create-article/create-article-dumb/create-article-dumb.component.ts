import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  articleForm: FormGroup = this.formBuilder.group({
    title: ["", [Validators.required]],
    content: ["", [Validators.required, Validators.minLength(5)]],
    date: [ new Date() , [Validators.required]],
    category: ["", [Validators.required]]
  });;
  article: Article;
  @Input() articleCreating: boolean;
  categories: string[] = ['Economy', 'Culture', 'Politics', 'Cooking','Entertainment', 'Research'];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }


  onSubmitClicked(){
    this.article = this.articleForm.value;
    this.article.user = this.currentUser;
    this.article.date = new Date();
    console.log(this.article)
    this.createClick.emit(this.article)
    this.articleForm.setValue({
      title: '',
      content: '',
      category: '',
      date: null
    })
    
  }

 

}
