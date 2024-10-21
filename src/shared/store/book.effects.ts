import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GoogleBooksService } from '../services';
import {
  searchBooksSuccess,
  searchBooksFailure,
  searchBooks,
  loadBookshelf,
  addToFavorites,
  addToFavoritesSuccess,
  removeFromFavorites,
  removeFromFavoritesSuccess,
  removeFromFavoritesFailure,
  loadBookshelfSuccess,
  loadBookshelfFailure,
} from './book.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IBook } from '../models/book.model';
import { IKind } from '../models/kind.model';

@Injectable()
export class BookEffects {
  private readonly localStorageKey = 'bookshelf';

  constructor(private actions$: Actions, private googleBooksService: GoogleBooksService) {}

  initBookshelf$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookshelf),
      switchMap(() => {
        return this.googleBooksService.getFavoriteBooks()
          .pipe(
            map((kind: IKind) => {
              const books = Array.isArray(kind.items) ? kind.items as IBook[] : [];
              localStorage.setItem(this.localStorageKey, JSON.stringify(books));
              return loadBookshelfSuccess({ books });
            }),
            catchError((error) => {
              return of(loadBookshelfFailure({ error: error.message }));
            })
          );
      })
    ));

  addToBookshelf$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavorites),
      switchMap(({ book }) => {
        return this.googleBooksService.addToFavorite(book)
          .pipe(
            map(() => {
              console.log('book: ', book);
              const books = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]') as IBook[];
              books.push(book);
              localStorage.setItem(this.localStorageKey, JSON.stringify(books));
              return addToFavoritesSuccess({ book });
            }),
            catchError((error) => {
              return of(removeFromFavoritesFailure({ error: error.message }));
            })
          );
      })
    ));

  removeFromFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeFromFavorites),
      switchMap(({ book }) => {
        return this.googleBooksService.removeFromFavorite(book)
          .pipe(
            map(() => {
              console.log('boooooook: ', book)
              const favoriteBooks = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]') as IBook[];
              const modifiedList = favoriteBooks.filter((favoriteBook: IBook) => favoriteBook.id !== book.id);
              console.log('modifiedList: ', modifiedList);
              localStorage.setItem(this.localStorageKey, JSON.stringify(modifiedList));
              console.log('Localstore: ', JSON.parse(localStorage.getItem(this.localStorageKey) || '[]'));
              return removeFromFavoritesSuccess({ book });
            }),
            catchError((error) => {
              return of(removeFromFavoritesFailure({ error: error.message }));
            })
          );
      })
    )
  );

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchBooks),
      switchMap((action) =>
        this.googleBooksService.searchBooks(action.searchTerm, action.searchType)
          .pipe(
            map((books) => searchBooksSuccess({ books })),
            catchError((error) => of(searchBooksFailure({ error })))
          )
      )
    )
  );
}
