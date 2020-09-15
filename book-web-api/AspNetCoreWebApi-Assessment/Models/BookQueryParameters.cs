namespace AspNetCoreWebApi_Assessment.Controllers
{
    public class BookQueryParameters
    {
        private string sortBy;
        private decimal? minPrice;

        public string SortBy { get => sortBy; set => sortBy = value; }
        public decimal? MinPrice { get => minPrice; set => minPrice = value; }
    }
}