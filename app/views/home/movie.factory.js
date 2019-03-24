'use-strict';

/**
 * @ngdoc overview
 * @name angularJsApplicationApp.home
 * @description
 * # movieService
 *
 * factory for the application.
 */

(function () {
    angular.module('angularJsApplicationApp.home')
        .factory('movieService', function ($http, $q) {
            return {
                get: function () {
                    var deferred = $q.defer();
                    $http.get.apply(null, arguments)
                        .success(deferred.resolve)
                        .error(deferred.resolve);
                    return deferred.promise;
                }
            }
        });
})();