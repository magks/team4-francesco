using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace AspNetCoreWebApi_Assessment.Repository
{
    public interface IBookRepository
    {
        Book AddBook(Book Book);
        void DeleteAllBooks();
        Book DeleteBook(int id);
        Book GetBook(int id);
        IEnumerable<Book> GetBooks(decimal? minPrice);
        IEnumerable<Book> GetBooksByAuthor(decimal? minPrice);
        IEnumerable<Book> GetBooksByTitle(decimal? minPrice);
        int UpdateBook(int id, Book Book);
    }
}