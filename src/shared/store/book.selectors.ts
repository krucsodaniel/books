import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookState } from './book.reducer';

export const selectBookState = createFeatureSelector<BookState>('bookState');

export const selectAllBooks = createSelector(
  selectBookState,
  (state: BookState) => state.books
);

export const selectLoading = createSelector(
  selectBookState,
  (state: BookState) => state.loading
);

export const selectError = createSelector(
  selectBookState,
  (state: BookState) => state.error
);
