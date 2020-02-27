const angular = require('angular');

angular.module('app-bootstrap').component('book', {
  template: require('./book.pug')(),
  controllerAs: 'vm',
  controller: [
    function() {
      this.book = {
        id: 1,
        author: 'Emmie Thiel',
        title: 'Ring of Bright Water',
        genre: 'Short story',
        publisher: 'Butterworth-Heinemann',
        year: '1968',
        image_url: null
      };
    }
  ]
});
