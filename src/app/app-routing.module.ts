import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookshelfPageComponent, HomePageComponent, SearchPageComponent } from './pages';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'bookshelf', component: BookshelfPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
