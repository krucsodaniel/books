import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookAction } from '../shared/store/book.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'books';

  constructor(private store: Store) { // TODO: ADD Auth check
    this.store.dispatch({ type: BookAction.loadBookshelf });
  }
}
