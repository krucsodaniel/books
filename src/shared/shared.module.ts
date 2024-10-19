import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent, CardComponent } from './components/';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    SearchbarComponent,
    CardComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    SearchbarComponent,
    CardComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
