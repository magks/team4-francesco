export class Book {
    
    id: number;
    title: string;
    price: number;
    author: string;

    constructor(title: string, price: number, author: string, id=null) {
        this.title = title;
        this.price = price;
        this.author = author;
        if (id != null) this.id = id
    }  
}