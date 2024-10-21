import { createReducer, on } from '@ngrx/store';
import {
  searchBooks,
  searchBooksSuccess,
  searchBooksFailure,
  addToFavoritesSuccess,
  removeFromFavoritesSuccess,
  removeFromFavoritesFailure,
  addToFavoritesFailure,
  loadBookshelfSuccess,
  loadBookshelfFailure,
} from './book.actions';
import { IBook } from '../../models/book.model';

export interface BookState {
  books: IBook[] | undefined;
  loading: boolean;
  error: string | null;
  bookshelf: IBook[];
}

export const initialState: BookState = {
  books: undefined,
  loading: false,
  error: null,
  bookshelf: [],
};

export const bookReducer = createReducer(
  initialState,

  on(searchBooks, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(searchBooksSuccess, (state, { books }) => ({
    ...state,
    books: books,
    loading: false,
    error: null,
  })),

  on(searchBooksFailure, (state, { error }) => ({
    ...state,
    books: [],
    loading: false,
    error: error,
  })),

  on(loadBookshelfSuccess, (state, { books }) => ({
    ...state,
    bookshelf: [...state.bookshelf, ...books],
  })),

  on(loadBookshelfFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(addToFavoritesSuccess, (state, { book }) => ({
    ...state,
    bookshelf: [...state.bookshelf, book],
  })),

  on(addToFavoritesFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(removeFromFavoritesSuccess, (state, { book }) => ({
    ...state,
    bookshelf: state.bookshelf.filter(favoriteBook => favoriteBook.id !== book.id),
  })),

  on(removeFromFavoritesFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
);
