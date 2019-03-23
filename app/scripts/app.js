'use strict';

/**
 * @ngdoc overview
 * @name angularJsApplicationApp
 * @description
 * # angularJsApplicationApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsApplicationApp', [
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
