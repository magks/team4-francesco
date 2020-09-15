import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/Book'
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms'; 
import { BookService } from 'app/service/book.service';

@Component({
  selector: 'kmc-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: []
})
export class EditComponent implements OnInit, OnDestroy
{
    private bookId:number
    public book:Book
    sub:Subscription
    bookService:BookService

    constructor(private route: ActivatedRoute, bookService:BookService) 
    {
        this.bookService = bookService
    }
    ngOnDestroy(): void
    {
        this.sub.unsubscribe();
    }

    ngOnInit() 
    {
        this.sub = this.route.params.subscribe(params => {this.bookId = +params['id']})
        this.book = this.getBook(this.bookId)
    }

   public getBook(id:number)
   {
       var bookArray:Book[] = [new Book("Hunger Games", 60, "idk", 0), new Book("Harry Potter", 70, "JK", 1)]
       return bookArray[id]
       //TODO: Use the service
       //return this.bookService.getBooks().toPromise<[Book]>().then(val => {return val})
   }

   public postBook() 
   {
       if (!this.checkBook()) return;
       alert("Book To Be Posted Here:\n" +  "ID: " + this.book.id + "\nPrice: " + this.book.price + "\nTitle: " + this.book.title + "\nAuthor: " + this.book.author)
       //TODO: Use the service
       //this.bookService.updateBook(this.book)
   }

   public goBack() 
   {
       //TODO: Navagate to list
       alert("Go back to main screen here")
   }

   private checkBook():boolean 
   {
       var returnString:string = ""
       if (this.book.author == null || this.book.author == "") returnString += "Error: Author Must Contain Value\n"
       if (this.book.price == null || this.book.price < 0)  returnString += "Error: Check That The Price Is A Valid Positive Number\n"
       if (this.book.title == null || this.book.title == "") returnString += "Error: Book Title Must Be Included\n"
       if (returnString != "") {alert(returnString); return false;}
       return true;

   }
}