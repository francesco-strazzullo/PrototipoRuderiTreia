'use strict';

angular.module('ruderiTreia001App')
        .controller('root', ['$scope',function($scope) {
                
              $scope.index = 0;
              $scope.images = [
                'sanvicino.jpg',
                'girasoli.jpg',
                'paesaggio3.jpg',
                'paesaggio1.jpg'
              ];
              $scope.backgroundImage = 'images/' + $scope.images[$scope.index];
              
              $scope.next = function(){
                  $scope.index++;
                  $scope.backgroundImage = 'images/' + $scope.images[$scope.index];
              };
        }])
        .controller('home', ['$scope',function($scope) {
              
        }]);
