using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreWebApi_Assessment
{
    public class Book
    {
        private int id;
        private string title;
        private decimal? price;
        private string author;
        public Book() {}

        public Book(string title, decimal? price, string author)
        {
            this.title = title;
            this.price = price;
            this.author = author;
        }

        public Book(int id, string title, decimal? price, string author)
        {
            this.id = id;
            this.title = title;
            this.price = price;
            this.author = author;
        }

        public int Id { get => id; set => id = value; }
        public string Title { get => title; set => title = value; }
        public decimal? Price { get => price; set => price = value; }
        public string Author { get => author; set => author = value; }
    }
}
