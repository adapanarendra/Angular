'use strict';

/**
 * @ngdoc overview
 * @name angularJsApplicationApp.about
 * @description
 * # angularJsApplicationApp.about
 *
 * About Controller of the application.
 */
(function () {
    angular
        .module('angularJsApplicationApp.about')
        .controller('aboutController', aboutController);

    aboutController.$inject = [];
    function aboutController() {
        var vm = this;
    }
})();