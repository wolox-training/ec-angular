const angular = require('angular');
/* eslint-disable */
angular.module('app-bootstrap').component('book', {
  template: require('./book.pug')(),
  controllerAs: 'vm',
  controller: [
    '$stateParams',
    'booksServices',
    function($stateParams, booksServices) {
      booksServices
        .getBooksBy({ filterName: $stateParams.id, filterField: 'id' })
        .then(book => (this.book = book));
    }
  ]
});
