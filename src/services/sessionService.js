/* eslint-disable */
angular.module('app-bootstrap').service('sessionService', [
  function() {
    this.userLoggedIn = user => sessionStorage.setItem('token', JSON.stringify(user));
    this.loginState = () => sessionStorage.getItem('token');
  }
]);
