'use strict';

/**
 * @ngdoc overview
 * @name angularJsApplicationApp.home
 * @description
 * # angularJsApplicationApp.home
 *
 * Home route of the application.
 */

angular
    .module('angularJsApplicationApp.home')
    .config(function ($routeProvider) {
        $routeProvider
          .when('/home', {
            templateUrl: 'views/home/home.tpl.html',
            controller:'homeController',
            controllerAs :'vm'
          })
      });
