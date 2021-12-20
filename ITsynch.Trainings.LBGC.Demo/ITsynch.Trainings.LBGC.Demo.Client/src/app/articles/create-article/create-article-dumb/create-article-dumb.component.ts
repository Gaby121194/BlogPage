import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../users/users.model';
import { Article } from '../../articles.model';

@Component({
  selector: 'its-create-article-dumb',
  templateUrl: './create-article-dumb.component.html',
  styleUrls: ['./create-article-dumb.component.css']
})
export class CreateArticleDumbComponent implements OnInit, OnChanges {
  @Input() id: number;
  @Input() currentUser: User;
  @Input() articleToEdit: Article;
  @Output() createClick = new EventEmitter<Article>();
  @Output() editClick = new EventEmitter<Article>();
  articleForm: FormGroup = this.formBuilder.group({
    title: ["", [Validators.required]],
    content: ["", [Validators.required, Validators.minLength(5)]],
    date: [ new Date() , [Validators.required]]
  });;
  article: Article;
  editable: boolean = false;
  @Input() articleCreating: boolean;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if(this.articleToEdit){
      this.editable = true;
      this.articleForm.setValue({
        title: this.articleToEdit.title,
        content: this.articleToEdit.content,
        date: this.articleToEdit.date
      })
    }
  }

  onSubmitClicked(){
    console.log(this.articleForm.value)
    this.article = this.articleForm.value;
    this.article.user = this.currentUser;
    if(this.editable){
      this.article.id = this.articleToEdit.id
      this.article.date = new Date();
      console.log(this.article)
      this.editClick.emit(this.article)
    }
    else{
      console.log(this.article)
      this.createClick.emit(this.article)
    }
    this.articleForm.setValue({
      title: '',
      content: '',
      date: null
    })
    
  }

 

}
