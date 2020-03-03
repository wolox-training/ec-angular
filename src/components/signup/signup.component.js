const angular = require('angular');

angular.module('app-bootstrap').component('signup', {
  template: require('./signup.pug')(),
  controllerAs: 'vm',
  controller: [function() {}]
});
