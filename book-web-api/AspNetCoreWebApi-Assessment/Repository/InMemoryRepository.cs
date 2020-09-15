using AspNetCoreWebApi_Assessment.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreWebApi_Assessment.Repository
{

    public class InMemoryRepository : IBookRepository
    {
        private enum ReturnCode
        {
            NO_CONTENT,
            NOT_FOUND
        }
        private readonly BookDbContext _context;

        public InMemoryRepository(BookDbContext context)
        {
            _context = context;
            _context.Database.EnsureCreated();
        }

        public Book AddBook(Book Book)
        {
            try
            {
                _context.Books.Add(Book);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return null;
            }
            return Book;
        }

        public int UpdateBook(int id, Book Book)
        {
            _context.Entry(Book).State = EntityState.Modified;

            try
            {
                _context.Books.Update(Book);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(id))
                    return (int)ReturnCode.NOT_FOUND;
                else
                    throw;
            }
            return (int)ReturnCode.NO_CONTENT;
        }

        public IEnumerable<Book> GetBooks(decimal? minPrice)
        {
            minPrice = minPrice == null ? 0 : minPrice;
            return _context.Books.Where(b => b.Price > minPrice).ToList();
        }

        public IEnumerable<Book> GetBooksByTitle(decimal? minPrice)
        {
            minPrice = minPrice == null ? 0 : minPrice;
            return _context.Books
                    .Where(b => b.Price > minPrice)
                    .OrderBy(b => b.Title)
                    .ToList();
        }

        public IEnumerable<Book> GetBooksByAuthor(decimal? minPrice)
        {
            minPrice = minPrice == null ? 0 : minPrice;
            return _context.Books
                    .Where(b => b.Price > minPrice)
                    .OrderBy(b => b.Author)
                    .ToList();
        }

        public Book GetBook(int id)
        {
            return _context.Books.Find(id);
        }

        private bool BookExists(int id)
        {
            return _context.Books.Any(e => e.Id == id);
        }


        public void DeleteAllBooks()
        {
            _context.Books.RemoveRange(_context.Books);
            _context.SaveChanges();
        }

        public Book DeleteBook(int id)
        {
            Book Book = _context.Books.Find(id);
            if (Book != null)
            {
                _context.Books.Remove(Book);
                _context.SaveChanges();
            }
            return Book;
        }
    }

}
