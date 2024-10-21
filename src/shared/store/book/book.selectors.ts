import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookState } from './book.reducer';
import { IBook } from '../../models/book.model';

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

export const selectBookshelf = createSelector(
  selectBookState,
  (state: BookState) => state.bookshelf
);

export const isBookInBookshelf = (bookId: string) => createSelector(
  selectBookshelf,
  (bookshelf: IBook[]) => bookshelf.some(book => book.id === bookId)
);

export const selectBookshelfCount = createSelector(
  selectBookshelf,
  (bookshelf: IBook[]) => bookshelf.length
);
