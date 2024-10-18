import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent, SearchPageComponent, BookshelfPageComponent } from './pages';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
