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
            'infinite-scroll',
            'ui.bootstrap',
            'ui.bootstrap.tabs',
            'pascalprecht.translate'
        ])        
        .config(function($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: 'l10n/',
                suffix: '.json'
            });

            $translateProvider.preferredLanguage('it');
        })
        .config(function($routeProvider) {
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
                    .when('/house/:id', {
                        templateUrl: 'views/house.html',
                        controller: 'house'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        }).run(function() {
            //HACK: in mobile non viene chiuso il menu
            $('.nav li ').not('.dropdown-toggle').not('.dropdown').on('click', function() {
                var element = jQuery('.navbar-toggle');
                if (element.css('display') !== 'none') {
                    jQuery('.navbar-toggle').click();
                }
            });

            FastClick.attach(document.body);
        });
