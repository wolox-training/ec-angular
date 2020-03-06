const angular = require('angular');

angular.module('app-bootstrap').component('login', {
  template: require('./login.pug')(),
  controllerAs: 'vm',
  controller: [
    '$state',
    'sessionService',
    function($state, sessionService) {
      this.user = {};
      this.login = () => {
        sessionService.userLoggedIn(this.user);
        $state.transitionTo('navbar.home');
      };
    }
  ]
});
