'use strict';

angular.module('ruderiTreia001App')
        .controller('root', ['$location', '$scope', function($location, $scope) {

                $scope.playerReady = false;

                $scope.$on('$routeChangeSuccess', function() {
                    $scope.currentPath = $location.path();
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
        .controller('home', ['$scope', function($scope) {

            }])
        .controller('houses', ['$scope', 'housesRepository', function($scope, housesRepository) {
                $scope.houses = [];

                $scope.load = function() {
                    housesRepository.list().then(function(data) {
                        $scope.houses = _.union($scope.houses, data);
                    });
                };


                $scope.onPage = function() {
                    $scope.load();
                };

                $scope.load();

            }])
        .controller('about', ['$scope', function($scope) {

            }]);
