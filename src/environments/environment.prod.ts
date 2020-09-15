export const environment = {
  production: true,
  booksProxyPath: '/api/Books',
  apiPort: 5200,
  apiEndpoints: {
    addBook: '/AddBook',        // expects Book shaped JSON object in the body
    editBook: '/EditBook',      // expects Book shaped JSON object in the body
    getBooks: '/ListBooks',     // accepts optional query parameters: SortBy=[title|author], MinSalary=[\d*]
    deleteBook: '/DeleteBook/'  // expects integer id at end of url path, e.g. .../DeleteBook/1
  }
};
