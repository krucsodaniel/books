import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SearchbarComponent,
  CardComponent,
  LoaderComponent,
  NavbarComponent,
  AuthButtonComponent,
  BadgeComponent,
} from './components/';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AuthService, GoogleBooksService } from './services';
import { BrowserModule } from '@angular/platform-browser';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    SearchbarComponent,
    CardComponent,
    LoaderComponent,
    NavbarComponent,
    AuthButtonComponent,
    BadgeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterLink,
    CdkOverlayOrigin,
    CdkConnectedOverlay,
  ],
  exports: [
    SearchbarComponent,
    CardComponent,
    LoaderComponent,
    NavbarComponent,
  ],
  providers: [GoogleBooksService, AuthService, AuthGuard]
})
export class SharedModule {}
