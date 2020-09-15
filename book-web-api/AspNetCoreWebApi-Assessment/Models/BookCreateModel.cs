using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreWebApi_Assessment.Models
{
    public class BookCreateModel
    {
        private string title;
        private decimal? price;
        private string author;
        [Required]
        public string Title { get => title; set => title = value; }
        [Required]
        public decimal? Price { get => price; set => price = value; }
        [Required]
        public string Author { get => author; set => author = value; }
    }
}
