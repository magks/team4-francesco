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
       if (!this.checkBook()) return;
       alert("Book To Be Posted Here:\n" +  "ID: " + this.book.Id + "\nPrice: " + this.book.Price + "\nTitle: " + this.book.Title + "\nAuthor: " + this.book.Author)
   }

   public goBack() 
   {
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