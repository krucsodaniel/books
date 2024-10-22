import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, Input, OnInit } from '@angular/core';
import { IBook } from '../../models/book.model';
import { Store } from '@ngrx/store';
import { addToFavorites, removeFromFavorites, } from '../../store/book/book.actions';
import { isBookInBookshelf } from '../../store/book/book.selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { isAuthenticated } from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() book!: IBook;
  isInBookshelf!: boolean;
  isLoggedIn = false;

  constructor(private store: Store, private destroyRef: DestroyRef, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setBookStateInBookshelf();
    this.setAuthState();
  }

  handleBookAction(book: IBook): void {
    if (this.isInBookshelf) {
      this.store.dispatch(removeFromFavorites({ book }));
    } else {
      this.store.dispatch(addToFavorites({ book }));
    }
  }

  private setBookStateInBookshelf(): void {
    this.store.select(isBookInBookshelf(this.book.id))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isBookInBookshelf) => {
        this.isInBookshelf = isBookInBookshelf;
        this.cdr.detectChanges();
      });
  }

  private setAuthState(): void {
    this.store.select(isAuthenticated)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((authState) => {
        this.isLoggedIn = authState;
        this.cdr.detectChanges();
      });
  }
}
