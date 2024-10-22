import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { IKind } from '../models/kind.model';
import { IBook } from '../models/book.model';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleBooksService {
  private readonly BASE_GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1';
  private readonly BOOKSHELF_URL = `${this.BASE_GOOGLE_BOOKS_API_URL}/mylibrary/bookshelves/0`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  searchBooks(searchTerm: string, searchType: string | null): Observable<IBook[]> {
    const params = new HttpParams()
      .set('q', `${this.typeOfSearch(searchType)}:${searchTerm}`)
      .set('maxResults', '20');

    return this.http.get<IKind>(`${this.BASE_GOOGLE_BOOKS_API_URL}/volumes`, { params })
      .pipe(
        map((response: IKind) => {
          return response.items || [];
        }),
        catchError((error) => {
          throw error;
        })
      );
  }

  getFavoriteBooks(): Observable<IKind> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.accessToken}`,
    });

    return this.http.get<IKind>(`${this.BOOKSHELF_URL}/volumes`, { headers })
      .pipe(
        catchError((error) => {
          throw error;
        }),
      );
  }

  addToFavorite(book: IBook): Observable<IBook> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.accessToken}`,
      'Content-Type': 'application/json',
    });

    return this.http.post<IBook>(`${this.BOOKSHELF_URL}/addVolume?volumeId=${book.id}`, JSON.stringify(book), { headers })
      .pipe(
        catchError((error) => {
          throw error;
        }),
      );
  }

  removeFromFavorite(book: IBook): Observable<IBook> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.accessToken}`,
      'Content-Type': 'application/json',
    });

    return this.http.post<IBook>(`${this.BOOKSHELF_URL}/removeVolume?volumeId=${book.id}`, null, { headers })
      .pipe(
        catchError((error) => {
          throw error;
        }),
      );
  }

  private typeOfSearch(searchType: string | null): string {
    return searchType === 'author' ? 'inauthor' : 'intitle';
  }
}
