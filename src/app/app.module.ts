import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent, SearchPageComponent, BookshelfPageComponent } from './pages';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { bookReducer } from '../shared/store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from '../shared/store/book.effects';

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
    StoreModule.forRoot({ bookState: bookReducer }),
    EffectsModule.forRoot([BookEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
