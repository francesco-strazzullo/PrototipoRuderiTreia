'use strict';

angular.module('ruderiTreia001App')
        .controller('root', ['$scope', function($scope) {

                $scope.playerReady = false;
        
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
        .controller('about', ['$scope', function($scope) {

        }]);
