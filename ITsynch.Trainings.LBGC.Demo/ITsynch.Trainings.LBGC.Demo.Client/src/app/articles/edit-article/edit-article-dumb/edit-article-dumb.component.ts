import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../../articles.model';

@Component({
  selector: 'its-edit-article-dumb',
  templateUrl: './edit-article-dumb.component.html',
  styleUrls: ['./edit-article-dumb.component.css']
})
export class EditArticleDumbComponent implements OnInit {

  @Input() articleToEdit: Article;
  @Output() editClick = new EventEmitter<Article>();
  articleForm: FormGroup = this.formBuilder.group({
    title: ["", [Validators.required]],
    content: ["", [Validators.required, Validators.minLength(5)]],
    date: [ new Date() , [Validators.required]]
  });;
  article: Article;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if(this.articleToEdit) 
    {
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
    this.article.user = this.articleToEdit.user;
    this.article.id = this.articleToEdit.id
    this.article.date = new Date();
    console.log(this.article)
    this.editClick.emit(this.article)
    this.articleForm.setValue({
      title: '',
      content: '',
      date: null
    })
    
  }

}
