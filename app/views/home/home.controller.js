'use strict';

/**
 * @ngdoc overview
 * @name angularJsApplicationApp.home
 * @description
 * # angularJsApplicationApp.home
 *
 * Home Controller of the application.
 */
(function () {
    angular
        .module('angularJsApplicationApp.home')
        .controller('homeController', homeController);

    homeController.$inject = ['$http', 'movieService'];
    var MOVIE_API = 'https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=';
    function homeController($http, movieService) {
        var vm = this;
        vm.showMovie = false;
        vm.findMovie = findMovie;
        vm.showMovieDescription = showMovieDescription;
        function findMovie() {
            vm.showLoading = true;
            if (vm.movieName) {
                $http.get(MOVIE_API + vm.movieName)
                    .then(function (data) {
                        vm.showLoading = false;
                        vm.movieResponse = data;
                    })
                    .catch(function (data, status) {
                    })
                    .finally(function () {
                        vm.showLoading = false;
                    });
            }
        }

        function showMovieDescription(title, overview) {
            vm.title = title;
            vm.overview = overview;
            vm.showMovie = true;
        }
    }
})();