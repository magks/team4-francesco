import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/Book'
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms'; 
import { BookWebApiService } from 'app/service/book.service';

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
    bookService:BookWebApiService

    constructor(private route: ActivatedRoute, bookService: BookWebApiService) 
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
       alert("Book To Be Posted Here:\n" +  "ID: " + this.book.Id + "\nPrice: " + this.book.Price + "\nTitle: " + this.book.Title + "\nAuthor: " + this.book.Author)
       //TODO: Use the service
       this.bookService.editBook(this.book).subscribe()
   }

   public goBack() 
   {
       //TODO: Navagate to list
       alert("Go back to main screen here")
   }

   private checkBook():boolean 
   {
       var returnString:string = ""
       if (this.book.Author == null || this.book.Author == "") returnString += "Error: Author Must Contain Value\n"
       if (this.book.Price == null || this.book.Price < 0)  returnString += "Error: Check That The Price Is A Valid Positive Number\n"
       if (this.book.Title == null || this.book.Title == "") returnString += "Error: Book Title Must Be Included\n"
       if (returnString != "") {alert(returnString); return false;}
       return true;

   }
}