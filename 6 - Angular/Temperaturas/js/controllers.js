'use strict'

var realTemApp = angular.module('realTempAppControllers', []);

realTemApp.controller('TempController', function($scope, Temp) {
	$scope.tempInCelcius = 0.0;
	$scope.resultInFahrenheit = 0.0;
	$scope.resultInKelvins = 0.0;

	$scope.convertTemperatures = function(){
		$scope.resultInFahrenheit = Temp.celciusToFahrenheit($scope.tempInCelcius);
		$scope.resultInKelvins = Temp.celciusToKelvin($scope.tempInCelcius);
	}
});