import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBookshelfCount } from '../../store/book/book.selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent implements OnInit {
  amountOfBookInFavorites = 0;

  constructor(private store: Store, private destroyRef: DestroyRef, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.store.select(selectBookshelfCount)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((amountOfBooks: number) => {
        this.amountOfBookInFavorites = amountOfBooks;
        this.cdr.detectChanges();
      });
  }
}
