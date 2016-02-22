'use strict';

angular.module('navbarexample')
  .directive('simpleNavbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/modules/navbar/navbar.html',
      controller: 'NavbarCtrl',
    };
  });