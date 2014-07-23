'use strict';

/**
 * @ngdoc overview
 * @name ruderiTreia001App
 * @description
 * # ruderiTreia001App
 *
 * Main module of the application.
 */
angular
  .module('ruderiTreia001App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'about'
      })
      .when('/houses', {
        templateUrl: 'views/houses.html',
        controller: 'houses'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
