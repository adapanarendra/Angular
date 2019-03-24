'use strict';

/**
 * @ngdoc overview
 * @name angularJsApplicationApp.home
 * @description
 * # angularJsApplicationApp.home
 *
 * Home Controller of the application.
 */

angular
    .module('angularJsApplicationApp.home')
    .controller('homeController', homeController);

homeController.$inject = ['$scope'];
function homeController($scope) {
$scope.a = 10;
}