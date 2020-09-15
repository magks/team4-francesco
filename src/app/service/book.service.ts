import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book'
import { environment } from '../../environments/environment';
import { BookApiEndpoint } from '../models/BookApiEndpoint';

/*
 * BookAPI Service wraps communication to and from web api via HTTP
 */
@Injectable({
  providedIn: 'root',
})
export class BookWebApiService {
  private apiUrl: string;
  private apiEndpoint: BookApiEndpoint;
  private defaultOptions: any;

  constructor(private httpClient: HttpClient) {
    this.defaultOptions = { headers: { 'Content-Type': 'application/json' } };
    this.apiUrl = environment.apiUrl;

    let apiPaths = environment.apiEndpoints;
    this.apiEndpoint = {
        addBook:      `${this.apiUrl}${apiPaths.addBook}`,
        getBooks:     `${this.apiUrl}${apiPaths.getBooks}`,
        editBook:     `${this.apiUrl}${apiPaths.editBook}`,
        deleteBook:   `${this.apiUrl}${apiPaths.deleteBook}`
    };
  }

  addBook(postBook) {
    return this.httpClient.post(
      this.apiEndpoint.addBook,
      JSON.stringify(postBook),
      this.defaultOptions
    );
  }

  editBook(putBook) {
    return this.httpClient.put(
      this.apiEndpoint.editBook,
      JSON.stringify(putBook),
      this.defaultOptions
    );
  }

  getBooks() {
    return this.httpClient.get(this.apiEndpoint.getBooks);
  }

  deleteBook(id: number) {
    return this.httpClient.delete(`${this.apiEndpoint.deleteBook}${id}`);
  }
}
