import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../Model/book'
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'kmc-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy
{
    private bookId:number
    public book:Book
    sub:Subscription

    constructor(private route: ActivatedRoute) {}
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
       var bookArray:Book[] = [new Book(0, "Hunger Games", 60, "idk"), new Book(1, "Harry Potter", 70, "JK")]
       return bookArray[id]
   }

   public postBook() 
   {
       alert("Book To Be Posted Here:\n" +  "ID: " + this.book.Id + "\nPrice: " + this.book.Price + "\nTitle: " + this.book.Title + "\nAuthor: " + this.book.Author)
   }

   public goBack() 
   {
       alert("Go back to main screen here")
   }

}