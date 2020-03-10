angular.module('app-bootstrap').service('booksServices', [
  '$http',
  function($http) {
    this.getAllBooks = () =>
      $http.get('https://private-1057b-wbooks2.apiary-mock.com/books').then(response => response.data);

    this.getBooksBy = ({ filterName, filterField }) =>
      $http.get('https://private-1057b-wbooks2.apiary-mock.com/books').then(response => {
        if (filterField === 'id') {
          return response.data.find(book => book[filterField] == filterName); // eslint-disable-line eqeqeq
        } else {
          return response.data.filter(book =>
            book[filterField].toLowerCase().includes(filterName.toLowerCase())
          );
        }
      });
  }
]);
