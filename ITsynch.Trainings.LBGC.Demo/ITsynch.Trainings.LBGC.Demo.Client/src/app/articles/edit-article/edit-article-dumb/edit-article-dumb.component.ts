import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../../models/articles.model';


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
    date: [ new Date() , [Validators.required]],
    category: ['', [Validators.required]]
  });;
  article: Article;
  categories: string[] = ['Economy', 'Culture', 'Politics', 'Cooking','Entertainment', 'Research'];
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if(this.articleToEdit) 
    {
      this.articleForm.setValue({
        title: this.articleToEdit.title,
        content: this.articleToEdit.content,
        date: this.articleToEdit.date,
        category: this.articleToEdit.category
      })
    }
      
    
  }

  onSubmitClicked(){
    
    this.article = this.articleForm.value;
    this.article.user = this.articleToEdit.user;
    this.article.id = this.articleToEdit.id
    this.article.date = new Date();
    this.editClick.emit(this.article)
    this.articleForm.setValue({
      title: '',
      content: '',
      date: null,
      category: null
    })
    
  }

}
