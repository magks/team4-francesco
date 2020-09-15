// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: '/api',                   // proxy path
  apiPort: 5200,                    // web api port number
  apiEndpoints: {
    addBook: '/Book/AddBook',        // expects Book shaped JSON object in the body
    editBook: '/Book/EditBook',      // expects Book shaped JSON object in the body
    getBooks: '/Book/ListBooks',     // accepts optional query parameters: SortBy=[title|author], MinSalary=[\d*]
    deleteBook: '/Book/DeleteBook/'  // expects integer id at end of url path, e.g. .../DeleteBook/1
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
