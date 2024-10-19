import { createReducer, on } from '@ngrx/store';
import { searchBooks, searchBooksSuccess, searchBooksFailure } from './book.actions';
import { IBook } from '../models/book.model';

export interface BookState {
  books: IBook[] | undefined;
  loading: boolean;
  error: string | null;
}

export const initialState: BookState = {
  books: undefined,
  loading: false,
  error: null,
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
  }))
);
