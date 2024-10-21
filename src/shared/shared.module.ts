import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent, CardComponent, LoaderComponent, NavbarComponent, AuthButtonComponent } from './components/';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AuthService, GoogleBooksService } from './services';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    SearchbarComponent,
    CardComponent,
    LoaderComponent,
    NavbarComponent,
    AuthButtonComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  exports: [
    SearchbarComponent,
    CardComponent,
    LoaderComponent,
    NavbarComponent,
  ],
  providers: [GoogleBooksService, AuthService]
})
export class SharedModule {}
