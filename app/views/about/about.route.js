'use strict';

/**
 * @ngdoc overview
 * @name angularJsApplicationApp.about
 * @description
 * # angularJsApplicationApp.about
 *
 * About route of the application.
 */
(function () {
  angular
    .module('angularJsApplicationApp.about')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/about', {
          templateUrl: 'views/about/about.tpl.html',
          controller: 'aboutController',
          controllerAs: 'vm',
          activetab: 'about'
        })
    });
})();
