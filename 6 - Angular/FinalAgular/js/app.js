'use strict';

/* App Module */
/* se crea el modulo del aplicativo*/
var carApp = angular.module('carApp', [
	'ngRoute',
  'carAppAnimations',
  'carAppControllers',
  'carAppServices' // se agrega el servicio creado en services.js
]);


//Se agrega la configuracion de rutas!!
carApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cars', {
        templateUrl: 'partials/car-list.html',
        controller: 'CarListCtrl'
      }).
      when('/cars/:carId', {
        templateUrl: 'partials/car-detail.html',
        controller: 'CarDetailCtrl'
      }).
      otherwise({
        redirectTo: '/cars'
      });
  }]);