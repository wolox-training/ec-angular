const angular = require('angular');

angular.module('app-bootstrap').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('navbar.home', {
        url: '/',
        component: 'dashboard',
        requireLogin: true
      })
      .state('navbar.book', {
        url: '/book/:id',
        component: 'book',
        requireLogin: true
      })
      .state('signup', {
        url: '/signup',
        component: 'signup',
        requireLogin: false
      })
      .state('login', {
        url: '/login',
        component: 'login',
        requireLogin: false
      })
      .state('navbar', {
        url: '',
        component: 'navbar',
        abstract: true
      });
    $urlRouterProvider.otherwise('/');
  }
]);

angular.module('app-bootstrap').run([
  '$transitions',
  'sessionService',
  function($transitions, sessionService) {
    $transitions.onBefore({}, transition => {
      if (transition.to().requireLogin && !sessionService.loginState('token')) {
        return transition.router.stateService.target('login');
      } else if (!transition.to().requireLogin && sessionService.loginState('token')) {
        return transition.router.stateService.target('navbar.home');
      }
      // eslint-disable-next-line no-console
      console.log('Route changed, use ransition.abort(); for abort if you need', transition);
    });
  }
]);
