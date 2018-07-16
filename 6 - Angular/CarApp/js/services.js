'use strict';

var carAppServices = angular.module('carAppServices',[]);

carAppServices.factory('Car', [
	function() {
		return {
			notify: function(msg) {
				alert(msg);
			},
			getCars: function() {
				var cars = [
					{
						"name" : "Carro 1 in services",
						"snippet" : "Desc Carro 1 in services"
					},
					{
						"name" : "Carro 2 in services",
						"snippet" : "Desc Carro 2 in services"
					},
					{
						"name" : "Carro 3 in services",
						"snippet" : "Desc Carro 3 in services"
					}
				];
				return cars;
			}

		}
	}]);