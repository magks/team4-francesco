using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using AspNetCoreWebApi_Assessment.Models;
using AspNetCoreWebApi_Assessment.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreWebApi_Assessment.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBookRepository _repository;

        public BooksController(IBookRepository repository)
        {
            _repository = repository;
        }

        private ContentResult Error(string errMsg)
        {
            return Content(errMsg);
        }
        
        // POST api/Books/AddBook
        [HttpPost]
        public ActionResult<Book> AddBook(BookCreateModel bookModel)
        {
            Book inputBook = new Book(bookModel.Title, bookModel.Price, bookModel.Author);
            Book addedBook = _repository.AddBook(inputBook);
            if (addedBook == null)
                return StatusCode(500);

            return CreatedAtAction("ListBooks", new { id = addedBook.Id }, addedBook);
        }

        // List all [by ...] [with min price > x]
        // GET: api/Books/ListBooks ?SortBy=[Title|Author]&MinPrice=[<Decimal>]
        // GET: api/Books/ListBooks
        [HttpGet]
        public ActionResult<IEnumerable<Book>> ListBooks([FromQuery] BookQueryParameters queryParams)
        {
            IEnumerable<Book> books;
            try
            {
                string sortByParam = queryParams.SortBy == null ? String.Empty : queryParams.SortBy.ToUpper();
                switch (sortByParam)
                {
                    case "TITLE":
                        books = _repository.GetBooksByTitle(queryParams.MinPrice);
                        break;
                    case "AUTHOR":
                        books = _repository.GetBooksByAuthor(queryParams.MinPrice);
                        break;
                    default:
                       books = _repository.GetBooks(queryParams.MinPrice);
                       break;
                }
                if (books != null)
                    return new ActionResult<IEnumerable<Book>>(books);
                return StatusCode(500);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        // for CreatedAtActionResult()
        // GET: api/Books/GetBook/id
        [HttpGet("{id:int}")]
        public ActionResult<Book> GetBook(int id)
        {
            Book Book = _repository.GetBook(id);

            if (Book == null)
            {
                return NotFound();
            }
            return Book;
        }

        // PUT api/Books/EditBook/id
        [HttpPut("{id:int}")]
        public ActionResult EditBook(int id, BookCreateModel bookModel)
        {
            Book updatedBook = new Book(id, bookModel.Title, bookModel.Price, bookModel.Author);
            int retCode = _repository.UpdateBook(id, updatedBook);
            if (retCode != 0) // error
                return NotFound();

            return NoContent();
        }

        // DELETE: api/Books/DeleteAllBooks
        [HttpDelete]
        public ActionResult<Book> DeleteAllBooks()
        {
            try
            {
                _repository.DeleteAllBooks();
            }
            catch
            {
                StatusCode(500);
            }
            return NoContent();
        }

        // DELETE: api/Books/DeleteBook/id
        [HttpDelete("{id:int}")]
        public ActionResult<Book> DeleteBook(int id)
        {
            _repository.GetBook(id);
            Book Book = _repository.DeleteBook(id);
            if (Book == null)
            {
                return NotFound();
            }
            return Book;
        }

    }
}
