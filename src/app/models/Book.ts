export class Book {
    id: number;
    title: string;
    price: number;
    author: string;

    constructor(title: string, price: number, author: string) {
        this.title = title;
        this.price = price;
        this.author = author;
    }
}