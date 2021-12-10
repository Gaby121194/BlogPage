import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { sidebarItems } from './tokens/sidebaritems'
import { ITSYNCH_TRAININGS_DEMO_BASE_API_URL, ITSYNCH_TRAININGS_DEMO_SIDEBAR_ITEMS } from './app.tokens';
import { UsersModule } from './users/users.module';
import { appRoutes } from './app.routes';
import { ArticlesModule } from './articles/articles.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    LayoutModule,
    UsersModule,
    ArticlesModule
  ],
  providers: [{ provide: ITSYNCH_TRAININGS_DEMO_BASE_API_URL, useValue: environment.baseApiUrl },
              { provide: ITSYNCH_TRAININGS_DEMO_SIDEBAR_ITEMS, useValue: sidebarItems }
            ],
  bootstrap: [AppComponent],
})
export class AppModule {}
