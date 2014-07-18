'use strict';

angular.module('ruderiTreia001App')
        .controller('root', ['$scope', function($scope) {

                $scope.index = 0;
                $scope.images = [
                    'sanvicino.jpg',
                    'girasoli.jpg',
                    'paesaggio3.jpg',
                    'paesaggio1.jpg'
                ];
                $scope.backgroundImage = 'images/' + $scope.images[$scope.index];
                
                $scope.next = function() {
                    $scope.index++;
                    if ($scope.index >= $scope.images.length) {
                        $scope.index = 0;
                    }
                    $scope.backgroundImage = 'images/' + $scope.images[$scope.index];
                };

            }])
        .controller('home', ['$scope', 'dialogs', function($scope, dialogs) {
                
                $scope.showVideo = function(){
                    var dlg = dialogs.create('/dialogs/intro.html',null,{},{size:'lg'});
                };
            }])
        .controller('about', ['$scope',function($scope) {
               
            }]);
