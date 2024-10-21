import { createAction, props } from '@ngrx/store';
import { IBook } from '../models/book.model';

export const enum BookAction {
  searchBooks = '[Book Search] Search Books By Title',
  searchBooksSuccess = '[Book Search] Search Books Success',
  searchBooksFailure = '[Book Search] Search Books Failure',

  loadBookshelf = '[Bookshelf] Load Bookshelf',
  loadBookshelfSuccess = '[Bookshelf] Load Bookshelf Success',
  loadBookshelfFailure = '[Bookshelf] Load Bookshelf Failure',

  addToFavorites = '[Bookshelf] Add Book to Favorites',
  addToFavoritesSuccess = '[Bookshelf] Add Book to Favorites Success',
  addToFavoritesFailure = '[Bookshelf] Add Book to Favorites Failure',
  removeFromFavorites = '[Bookshelf] Remove Book from Favorites',
  removeFromFavoritesSuccess = '[Bookshelf] Remove Book from Favorites Success',
  removeFromFavoritesFailure = '[Bookshelf] Remove Book from Favorites Failure',
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

export const loadBookshelf = createAction(BookAction.loadBookshelf);

export const loadBookshelfSuccess = createAction(
  BookAction.loadBookshelfSuccess,
  props<{ books: IBook[] }>()
);

export const loadBookshelfFailure = createAction(
  BookAction.loadBookshelfFailure,
  props<{ error: string }>()
);

export const addToFavorites = createAction(
  BookAction.addToFavorites,
  props<{ book: IBook }>()
);

export const addToFavoritesSuccess = createAction(
  BookAction.addToFavoritesSuccess,
  props<{ book: IBook }>()
);

export const addToFavoritesFailure = createAction(
  BookAction.addToFavoritesFailure,
  props<{ error: string }>()
);

export const removeFromFavorites = createAction(
  BookAction.removeFromFavorites,
  props<{ book: IBook }>()
);

export const removeFromFavoritesSuccess = createAction(
  BookAction.removeFromFavoritesSuccess,
  props<{ book: IBook }>()
);

export const removeFromFavoritesFailure = createAction(
  BookAction.removeFromFavoritesFailure,
  props<{ error: string }>()
);
