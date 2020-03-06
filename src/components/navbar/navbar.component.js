const angular = require('angular');
/* eslint-disable */
angular.module('app-bootstrap').component('navbar', {
  template: require('./navbar.pug')(),
  controllerAs: 'vm',
  controller: [
    'sessionService',
    '$state',
    '$scope',
    function(sessionService, $state, $scope) {
      this.logout = () => {
        sessionService.userLoggedOut();
        $state.transitionTo('login');
      };
      $scope.navClass = 'nav-menu-no-display';
      this.changeMenuDisplay = () => {
        if ($scope.navClass === 'nav-menu-no-display') $scope.navClass = 'nav-menu';
        else $scope.navClass = 'nav-menu-no-display';
      };
    }
  ]
});
