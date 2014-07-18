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
    'ui.bootstrap',
    'dialogs.main'
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
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($templateCache){
    $templateCache.put('/dialogs/intro.html','<div style="text-align:center;"><iframe width="640" height="360" src="//www.youtube.com/embed/RUq7tbuH00E?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
  });
