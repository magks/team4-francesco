import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NumberSymbol } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private port: number;
  private baseUrl: string;
  
  constructor(private httpClient: HttpClient) {
    this.port = 44378;
    this.baseUrl = `http://localhost:${this.port}/books`;
  }

  addBook(postBook) {
    return this.httpClient.post(`${this.baseUrl}`, JSON.stringify(postBook));
  }

  getBooks() {
    return this.httpClient.get(`${this.baseUrl}/listBooks`);
  }

  updateBook(putBook) {
    return this.httpClient.put(`${this.baseUrl}/addBook`, JSON.stringify(putBook));
  }

  deleteBook(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/deleteBook/${id}`);
  }

  
}
