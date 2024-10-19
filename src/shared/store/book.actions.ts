import { createAction, props } from '@ngrx/store';
import { IBook } from '../models/book.model';

export const enum BookAction {
  searchBooks = '[Book Search] Search Books By Title',
  searchBooksSuccess = '[Book Search] Search Books Success',
  searchBooksFailure = '[Book Search] Search Books Failure',
}

export const searchBooks = createAction(
  BookAction.searchBooks,
  props<{ searchTerm: string, searchType: string }>()
);

export const searchBooksSuccess = createAction(
  BookAction.searchBooksSuccess,
  props<{ books: IBook[] }>()
);

export const searchBooksFailure = createAction(
  BookAction.searchBooksFailure,
  props<{ error: string | null }>()
);
