const angular = require('angular');
/* eslint-disable */
angular.module('app-bootstrap').component('dashboard', {
  template: require('./dashboard.pug')(),
  controllerAs: 'vm',
  controller: [
    '$state',
    'booksServices',
    function($state, booksServices) {
      this.filterTypes = [
        { id: 1, name: 'Nombre', field: 'title' },
        { id: 2, name: 'Autor', field: 'author' }
      ];
      this.filter = {
        name: '',
        type: ''
      };

      booksServices.getAllBooks().then(allBooks => {
        this.books = allBooks;
        this.filteredBooks = this.books;
      });

      this.filterData = () =>
        booksServices
          .getBooksBy({
            filterName: this.filter.name,
            filterField: this.filterTypes[this.filter.type - 1].field
          })
          .then(filteredBooks => (this.filteredBooks = filteredBooks));

      this.viewDetails = bookId => $state.transitionTo('navbar.book', { id: bookId });
    }
  ]
});
