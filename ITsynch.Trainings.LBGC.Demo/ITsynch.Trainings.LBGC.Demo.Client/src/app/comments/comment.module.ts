import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { UsersModule } from '../users/users.module';
import { StoreModule } from '@ngrx/store';
import * as fromComment from './+state/comment.reducer';
import { MatButtonModule } from '@angular/material/button';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { CommentEffects } from './+state/comment.effects';
import { ViewCommentComponent } from './view-comment/view-comment.component';
import { ViewDumbCommentComponent } from './view-comment/view-dumb-comment/view-dumb-comment.component';






@NgModule({
  declarations: [CreateCommentComponent, ViewCommentComponent, ViewDumbCommentComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    UsersModule,
    StoreModule.forFeature(fromComment.commentFeatureKey, fromComment.reducer),
    EffectsModule.forFeature([CommentEffects]),
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatInputModule,
  ],
  exports: [
    CreateCommentComponent,
    ViewCommentComponent,
    ViewDumbCommentComponent
  ]
})
export class CommentsModule {

}
