import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GoogleBooksService } from '../services';
import { searchBooksSuccess, searchBooksFailure, searchBooks } from './book.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private googleBooksService: GoogleBooksService) {}

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
