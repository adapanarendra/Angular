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
    'ngRoute',
    'angularJsApplicationApp.home'
  ]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: true
    });
  }]);
