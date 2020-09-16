import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookWebApiService } from 'app/service/book.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector:'mw-add-form',
    templateUrl: './add-form.component.html',
    styleUrls:['./add-form.component.css']
})

export class AddFormComponent implements OnInit {
    form: FormGroup;
    
    constructor(private router: Router, private toastr: ToastrService, private bookService: BookWebApiService){}


    ngOnInit(){
        this.form = new FormGroup({
            title: new FormControl("",  [Validators.required]),
            author: new FormControl("", [Validators.required]),
            price: new FormControl("",  [Validators.required])
        });
    }
    
    onSubmit(bookItem)
    {
      this.bookService.addBook(bookItem).subscribe(
        (response) => console.log('Record Inserted'),
        (error) => console.log(error)
       )
       this.router.navigate(['/']);
    }

    goBack() {
      this.router.navigate(['/']);
    }
}

// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { BookWebApiService } from 'app/service/book.service';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { Book } from 'app/models/Book';

// @Component({
//     selector:'mw-add-form',
//     templateUrl: './add-form.component.html',
//     styleUrls:['./add-form.component.css']
// })

// export class AddFormComponent implements OnInit {
//     form: FormGroup;
  
//     constructor(private router: Router, private toastr: ToastrService, private bookService:BookWebApiService){}

//     ngOnInit(){
//         this.form = new FormGroup({
//             title: new FormControl(""),
//             author: new FormControl(""),
//             price: new FormControl("")
//         });
//     }
    
//     onSubmit(bookItem: Book)
//     {

//       this.toastr.success('Inserted book!', '');
//       this.bookService.addBook(bookItem).subscribe(
//         (response) => alert(`Record Inserted!`), // this.toastr.success('Inserted book!', ''),
//         (error) =>    console.log(error) // this.toastr.error('Sorry! Something went wrong -- book not added.')
//        )
       
//       this.router.navigate(['/']);
//     }
// }
