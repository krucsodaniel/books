import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IKind } from '../models/kind.model';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  private readonly GOOGLE_BOOKS_API_URL = `https://www.googleapis.com/books/v1/volumes?key=${environment.API_KEY}`;

  constructor(private http: HttpClient) {}

  searchBooks(searchTerm: string, searchType: string | null): Observable<IBook[]> {
    const params = new HttpParams()
      .set('q', `${this.typeOfSearch(searchType)}:${searchTerm}`)
      .set('maxResults', '10');

    return this.http.get<IKind>(this.GOOGLE_BOOKS_API_URL, { params })
      .pipe(
        map((response: IKind) => {
          return response.items || [];
        }),
        catchError((error) => {
          throw error;
        })
      );
  }

  private typeOfSearch(searchType: string | null): string {
    return searchType === 'author' ? 'inauthor' : 'intitle';
  }
}
