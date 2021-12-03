import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './+state/users.effects';
import * as fromUsers from './+state/users.reducer';
import { UsersHomeComponent } from './users-home/users-home.component';
import { LayoutModule } from '../layout/layout.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UsersSelectorComponent } from './users-selector/users-selector.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [UsersHomeComponent, UsersSelectorComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects]),
    LayoutModule,
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  exports: [UsersHomeComponent, UsersSelectorComponent],
})
export class UsersModule {}
