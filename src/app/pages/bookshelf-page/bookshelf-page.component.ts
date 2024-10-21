import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IBook } from '../../../shared/models/book.model';
import { Observable } from 'rxjs';
import { selectBookshelf } from '../../../shared/store/book/book.selectors';

@Component({
  selector: 'app-bookshelf-page',
  templateUrl: './bookshelf-page.component.html',
  styleUrl: './bookshelf-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookshelfPageComponent {
  bookshelf$: Observable<IBook[]>;

  constructor(private store: Store) {
    this.bookshelf$ = this.store.select(selectBookshelf);
  }
}
