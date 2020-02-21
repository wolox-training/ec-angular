const angular = require('angular');

angular.module('app-bootstrap').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      component: 'dashboard'
    });
    $urlRouterProvider.otherwise('/');
  }
]);

angular.module('app-bootstrap').run([
  '$transitions',
  function($transitions) {
    $transitions.onBefore({ from: 'home' }, transition => {
      // eslint-disable-next-line no-console
      console.log('Route changed, use ransition.abort(); for abort if you need', transition);
    });
  }
]);
