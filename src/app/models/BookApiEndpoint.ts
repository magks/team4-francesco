export interface BookApiEndpoint {
    addBook:    string,     // expects Book shaped JSON object in the body
    editBook:   string,     // expects Book shaped JSON object in the body
    getBooks:   string,     // accepts optional query parameters: SortBy=[title|author], MinSalary=[\d*]
    getBook:    string,     // expects integer id at end of url path, e.g. .../GetBook/1
    deleteBook: string      // expects integer id at end of url path, e.g. .../DeleteBook/1
}