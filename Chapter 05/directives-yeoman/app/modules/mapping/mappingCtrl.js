'use strict';

/**
 * @ngdoc function
 * @name app.controller:mappingCtrl
 * @description
 * # mappingCtrl
 * Controller of the app
 */
angular.module('mapping')
	.controller('MappingCtrl', ['$scope','MappingService','JsonLocations', function ($scope, MappingService, JsonLocations) {

		// Create some positions in a pure JavaScript object
		var positions = [
			{ lat: -23.630153, lng: -46.563964 },
			{ lat: -23.625828, lng: -46.571946 },
			{ lat: -23.634006, lng: -46.576066 },
			{ lat: -23.624883 ,lng: -46.564209 }
		];

		//$scope.positions = positions;

		// Using a service
		//$scope.positions = MappingService.all();
		$scope.positions = JsonLocations.query();

	}]);
