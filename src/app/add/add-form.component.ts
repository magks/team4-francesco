import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookWebApiService } from 'app/service/book.service';

@Component({
    selector:'mw-add-form',
    templateUrl: './add-form.component.html',
    styleUrls:['./add-form.component.css']
})

export class AddFormComponent implements OnInit {
    form: FormGroup;
    bookService: BookWebApiService;
    
    constructor(private http: HttpClient, bookService:BookWebApiService)
    {
      this.bookService = bookService
    }

    ngOnInit(){
        this.form = new FormGroup({
            Title: new FormControl(""),
            Author: new FormControl(""),
            Price: new FormControl("")
        });
    }
    
    onSubmit(bookItem)
    {
        // this.http.post('https://localhost:44378/api/Books/AddBook', bookItem).subscribe(
        //   (response) => alert(response.toString()),
        //   (error) => alert(error)
        // )
      //TODO:Use Service
      this.bookService.addBook(bookItem)
        
    }
}
