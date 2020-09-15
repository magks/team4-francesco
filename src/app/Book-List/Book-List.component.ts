import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book';
import { BookWebApiService } from 'app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './Book-List.component.html',
  styleUrls: ['./Book-List.component.css'],
})
export class BookListComponent implements OnInit {
  public books: Book[];

  ngOnInit() {
    this.getBooks();
  }

  constructor(private service: BookWebApiService) {}

  getBooks() {
    this.service.getBooks().subscribe( book => {
        this.books = book as Book[];
    });
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.service.deleteBook(id).subscribe(() => {
        this.getBooks();
      });
    }
  }
}
