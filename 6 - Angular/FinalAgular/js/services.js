'use strict';

/* Services */
/* Se aplica el uso de servicios*/
var carAppServices = angular.module('carAppServices', ['ngResource']); //<---- Se agrega ng-resoruce para poder usar la libreria interna de angular

//Se declara el servicio Car! con una sola propiedad
carAppServices.factory('Car', ['$resource',
  function($resource){
    return $resource('cars/:carId.json', {}, {
      query: {method:'GET', params:{carId:'cars'}, isArray:true}
    });
  }]);
