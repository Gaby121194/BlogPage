import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './create-article/create-article.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesEffects } from './+state/articles.effects';
import * as fromArticles from './+state/articles.reducer';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ListDumbComponentComponent } from './list-articles/list-dumb-component/list-dumb-component.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import { ViewDumbComponent } from './view-article/view-dumb/view-dumb.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  declarations: [
    CreateArticleComponent,
    ListArticlesComponent,
    ListDumbComponentComponent,
    ViewArticleComponent,
    ViewDumbComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromArticles.articlesFeatureKey, fromArticles.reducer),
    EffectsModule.forFeature([ArticlesEffects]),
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    CommentsModule
  ],
  exports:[
    CreateArticleComponent
  ]
})
export class ArticlesModule { }
