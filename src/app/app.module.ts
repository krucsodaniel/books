import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent, SearchPageComponent, BookshelfPageComponent } from './pages';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { bookReducer } from '../shared/store/book/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from '../shared/store/book/book.effects';
import { AuthService, GoogleBooksService } from '../shared/services';
import { OAuthModule } from 'angular-oauth2-oidc';
import { authReducer } from '../shared/store/auth/auth.reducer';
import { AuthEffects } from '../shared/store/auth/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    BookshelfPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({ bookState: bookReducer, auth: authReducer }),
    EffectsModule.forRoot([BookEffects, AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    OAuthModule.forRoot(),
  ],
  providers: [GoogleBooksService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
