'use strict';

angular.module('ruderiTreia001App')
        .controller('root', ['$location', '$scope', function($location, $scope) {

                $scope.playerReady = false;

                $scope.$on('$routeChangeSuccess', function() {
                    $scope.currentPath = $location.path();
                    window.scrollTo(0,0);
                });

                $scope.$on('$viewContentLoaded', function() {

                    //Carico lo script a runtime, dato che non può essere scaricato
                    var tag = document.createElement('script');

                    tag.src = "https://www.youtube.com/iframe_api";
                    var firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                    window.onYouTubeIframeAPIReady = function() {
                        $scope.player = new YT.Player('player', {
                            videoId: 'lE33AmJipMU',
                            events: {
                                'onReady': function() {
                                    $('#myModal').fitVids();

                                    $('#myModal').on('shown.bs.modal', function(e) {
                                        $scope.player.playVideo();
                                    });

                                    $('#myModal').on('hide.bs.modal', function(e) {
                                        $scope.player.stopVideo();
                                    });

                                    $scope.playerReady = true;
                                    $scope.$apply();
                                }
                            }
                        });
                    };
                });

            }])
        .controller('home', ['$scope','$location', function($scope,$location) {
                $scope.goToHouse = function(){
                    $location.path("/house/0");
                };
            }])
        .controller('houses', ['$scope', 'housesRepository', function($scope, housesRepository) {
                $scope.houses = [];

                $scope.squareMeters = [
                    {name: '0', value: 0},
                    {name: '50', value: 50},
                    {name: '80', value: 80},
                    {name: '100', value: 100},
                    {name: '150', value: 150},
                    {name: '200', value: 200},
                    {name: '250', value: 250},  
                    {name: '300+', value: 10.000}
                ];

                $scope.selectedSquareMeterTo = $scope.squareMeters[0];
                $scope.selectedSquareMeterFrom = $scope.squareMeters[($scope.squareMeters.length) - 1];

                $scope.prices = [
                    0, 80.000, 100.000, 150.000, 200.000, 250.000, 350.000,
                ];
                $scope.prices = [
                    {name: '0', value: 0},
                    {name: '100.000', value: 100000},
                    {name: '150.000', value: 150000},
                    {name: '200.000', value: 200000},
                    {name: '250.000', value: 250000},
                    {name: '350.000', value: 350000},  
                    {name: '500.000+', value: 500000000}
                ];

                $scope.selectedPriceTo = $scope.prices[0];
                $scope.selectedPriceFrom = $scope.prices[($scope.prices.length) - 1];

                $scope.load = function() {
                    housesRepository.list().then(function(data) {
                        $scope.houses = $scope.houses.concat(data);
                    });
                };


                $scope.onPage = function() {
                    $scope.load();
                };

                $scope.load();

            }])
        .controller('house', ['$scope', 'housesRepository', '$routeParams', function($scope, housesRepository, $routeParams) {
                $scope.checkedAssets = {};
                $scope.house = {};
                $scope.price = 0;

                housesRepository.get($routeParams.id).then(function(data) {
                    $scope.house = data;
                    $scope.price = data.price;
                });

                housesRepository.listAssets($routeParams.id).then(function(data) {
                    $scope.assets = data;
                });

                $scope.findAsset = function(id) {
                    return _.find($scope.assets, function(a) {
                        return a.id === parseInt(id, 10);
                    });
                };

                $scope.$watch('checkedAssets', function(newValue) {
                    var keys = _.keys(newValue);

                    $scope.price = $scope.house.price;

                    $scope.price = _.reduce(keys, function(total, key) {
                        if (newValue[key]) {
                            return total + $scope.findAsset(key).price;
                        } else {
                            return total;
                        }
                    }, $scope.price);
                }, true);
            }])
        .controller('about', ['$scope', function($scope) {

            }]);
