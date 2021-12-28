import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadFavoritesArticles, markArticleAsFavorite, unmarkArticleAsFavorite } from '../../+state/articles.actions';
import { articlesFeatureKey } from '../../+state/articles.reducer';
import { User } from '../../../users/users.model';
import { Article } from '../../models/articles.model';
import { Filter } from '../../models/filter.model';

@Component({
  selector: 'its-list-dumb-component',
  templateUrl: './list-dumb-component.component.html',
  styleUrls: ['./list-dumb-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDumbComponentComponent implements OnInit, OnChanges {
  
  @Input()
  public articles: Article[];

  @Input()
  public currentUser: User;

  @Output() deleteArticleClick = new EventEmitter<number>();
  
  @Output() editArticleClick = new EventEmitter<number>();

  @Output() filterClick= new EventEmitter<Filter>();

  @Output() favoriteClick= new EventEmitter<number>();

  filterArticles: Filter; 
  filterForm: FormGroup = this.formBuilder.group({
    searchTitle: [""],
    searchAuthors: [null],
    minDate: [],
    maxDate: [],
    category: []
  })
  @Input()
  public users: User[];

  @Input()
  public favoritesArticles: Article[];

  articulos : Article[]
  categories: string[] = ['Economy', 'Culture', 'Politics', 'Cooking','Entertainment', 'Research'];

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store) {
    
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

  onMarkFavoriteClicked(id) {
    this.favoriteClick.emit(id)
    this.store.dispatch(markArticleAsFavorite({userId: this.currentUser.id, articleId: id}))
  }

  onUnmarkFavoriteClicked(id) {
    this.favoriteClick.emit(id)
    this.store.dispatch(unmarkArticleAsFavorite({userId: this.currentUser.id, articleId: id}))
  }

  isFavorite(id: number){
    
    return this.favoritesArticles.some(art=> art.id == id) ? true : false
  }



}
