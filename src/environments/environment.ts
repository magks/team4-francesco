// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiPort: 5200,                    // web api port number
  apiEndpoints: {
    addBook: '/api/Books/AddBook',        // expects Book shaped JSON object in the body
    getBooks: '/api/Books/ListBooks',     // accepts optional query parameters: SortBy=[title|author], MinSalary=[\d*]
    getBook:  '/api/Books/GetBook/',      // expects integer id at end of url path, e.g. .../GetBook/1
    editBook: '/api/Books/EditBook/',     // expects Book shaped JSON object in the body
    deleteBook: '/api/Books/DeleteBook/'  // expects integer id at end of url path, e.g. .../DeleteBook/1
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
