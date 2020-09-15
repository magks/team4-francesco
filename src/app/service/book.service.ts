import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book'

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private port: number;
  private basePath: string;

  // TODO: refactor port, basepath, and api endpoint literals into environment file and inject
  constructor(private httpClient: HttpClient) {
    this.port = 5200;
    this.basePath = `/api/Books`;
  }

  //TODO: getBook(id:number)

  addBook(postBook) {
    return this.httpClient.post(
      `${this.basePath}/AddBook`,
      JSON.stringify(postBook),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  getBooks() {
    return this.httpClient.get<[Book]>(`${this.basePath}/ListBooks`);
  }

  updateBook(putBook) {
    return this.httpClient.put(
      `${this.basePath}/EditBook`,
      JSON.stringify(putBook)
    );
  }

  deleteBook(id: number) {
    return this.httpClient.delete(`${this.basePath}/DeleteBook/${id}`);
  }
}
