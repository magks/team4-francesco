import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector:'mw-add-form',
    templateUrl: './add-form.component.html',
    styleUrls:['./add-form.component.css']
})

export class AddFormComponent implements OnInit {
    form: FormGroup;
    
    constructor(private http: HttpClient){}

    ngOnInit(){
        this.form = new FormGroup({
            title: new FormControl(""),
            author: new FormControl(""),
            price: new FormControl("")
        });
    }

    onSubmit(bookItem){
        console.log(bookItem);
    }
}
