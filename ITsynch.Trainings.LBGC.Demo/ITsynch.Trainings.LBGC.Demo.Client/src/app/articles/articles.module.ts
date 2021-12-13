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

@NgModule({
  declarations: [
    CreateArticleComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromArticles.articlesFeatureKey, fromArticles.reducer),
    EffectsModule.forFeature([ArticlesEffects]),
    MatButtonModule
  ],
  exports:[
    CreateArticleComponent
  ]
})
export class ArticlesModule { }
