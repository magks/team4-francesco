import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookWebApiService } from 'app/service/book.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private service: BookWebApiService,
    private toastr: ToastrService
  ) {}

  getBooks() {
    this.service.getBooks().subscribe((book) => {
      this.books = book as Book[];
      this.books.sort((a, b) => a.id - b.id);
    });
  }

  onDelete(id: number) {
    // TODO: error handling
    if (confirm('Are you sure you want to delete?')) {
      this.service.deleteBook(id).subscribe(() => {
        this.getBooks();
      });
    }
  }
}
