'use strict';

/* Controllers */

var carAppControllers = angular.module('carAppControllers', []);

//Inyectamos la dependecia Car creada en services.js
carAppControllers.controller('CarListCtrl', ['$scope', 'Car',
  function($scope, Car) {
    $scope.cars = Car.query();
    $scope.orderProp = 'model';
  }]);

carAppControllers.controller('CarDetailCtrl', ['$scope', '$routeParams', 'Car',
  function($scope, $routeParams, Car) {
    $scope.car = Car.get({carId: $routeParams.carId}, function(car) {
      $scope.mainImageUrl = car.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);