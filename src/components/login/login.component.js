const angular = require('angular');

angular.module('app-bootstrap').component('login', {
  template: require('./login.pug')(),
  controllerAs: 'vm',
  controller: [
    'sessionService',
    function(sessionService) {
      this.user = {};
      this.login = () => {
        sessionService.userLoggedIn(...this.user);
      };
    }
  ]
});
