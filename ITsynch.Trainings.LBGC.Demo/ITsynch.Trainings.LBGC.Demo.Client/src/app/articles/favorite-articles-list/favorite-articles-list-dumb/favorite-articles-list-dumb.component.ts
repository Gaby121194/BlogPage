import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { markArticleAsFavorite, unmarkArticleAsFavorite } from '../../+state/articles.actions';
import { User } from '../../../users/users.model';
import { Article } from '../../models/articles.model';

@Component({
  selector: 'its-favorite-articles-list-dumb',
  templateUrl: './favorite-articles-list-dumb.component.html',
  styleUrls: ['./favorite-articles-list-dumb.component.css']
})
export class FavoriteArticlesListDumbComponent implements OnInit {

  @Input()
  public currentUser: User;

  @Output() deleteArticleClick = new EventEmitter<number>();
  
  @Output() editArticleClick = new EventEmitter<number>();

  @Output() favoriteClick= new EventEmitter<number>();

  @Input()
  public users: User[];

  @Input()
  public favoritesArticles: Article[];


  constructor(private router: Router, private store: Store) {
    
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
