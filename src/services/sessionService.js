/* eslint-disable */
angular.module('app-bootstrap').service('sessionService', [
  function() {
    this.userLoggedIn = () => sessionStorage.setItem('token', JSON.stringify({ ...this.user }));
    this.loginState = () => sessionStorage.getItem('token');
  }
]);
