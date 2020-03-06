/* eslint-disable */
angular.module('app-bootstrap').service('sessionService', [
  function() {
    this.userLoggedIn = user => sessionStorage.setItem('token', JSON.stringify(user));
    this.userLoggedOut = user => sessionStorage.removeItem('token');
    this.loginState = () => sessionStorage.getItem('token');
  }
]);
