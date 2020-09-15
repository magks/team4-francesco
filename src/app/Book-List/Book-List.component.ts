import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book';


@Component({
    selector: 'app-Book-List',
    templateUrl: './Book-List.component.html',
    styleUrls: ['./Book-List.component.css']
})


export class BookListComponent implements OnInit {
    public apiUrl = "https://localhost:44378/books";
    public data: Book[] ;

    constructor(private http:HttpClient) {
        this.getBook()
        
     }

    getBook() {
        //return this.http.get("https://localhost:44378/api/books/getBooks")
        //.subscribe()
        this.data = [new Book("Hunger Games", 60, "idk", 0), new Book("Harry Potter", 70, "JK", 1)];
    } 

    /*getBookData(){
        this.getBook().subscribe(data => {
            console.log(data);
            this.data = data
        })
    }*/

    ngOnInit() {

    }
}