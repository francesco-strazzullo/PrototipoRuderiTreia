'use strict';

angular.module('ruderiTreia001App')
        .controller('root', ['$scope',function($scope) {
              $scope.images = [
                'sanvicino.jpg'
              ];
              $scope.backgroundImage = 'images/' + $scope.images[0];
        }])
        .controller('home', ['$scope',function($scope) {
              
        }]);