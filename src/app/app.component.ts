import { Component, DestroyRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookAction } from '../shared/store/book/book.actions';
import { isAuthenticated } from '../shared/store/auth/auth.selectors';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'books';

  constructor(private store: Store, private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.loadBookshelf();
  }

  private loadBookshelf(): void {
    this.store.select(isAuthenticated)
      .pipe(filter(Boolean),takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.store.dispatch({ type: BookAction.loadBookshelf })
      });
  }
}
