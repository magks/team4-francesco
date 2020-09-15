export class Book {
    
    Id: number;
    Title: string;
    Price: number;
    Author: string;

    constructor(title: string, price: number, author: string, id=null) {
        this.Title = title;
        this.Price = price;
        this.Author = author;
        if (id != null) this.Id = id
    }  
}