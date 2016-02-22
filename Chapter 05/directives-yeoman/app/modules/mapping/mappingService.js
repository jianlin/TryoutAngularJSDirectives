'use strict';

/**
 * @ngdoc function
 * @name app.service:mappingService
 * @description
 * # mappingService
 * Service of the app
 */
angular.module('mapping')
	.factory('MappingService', ['$resource', function ($resource) {

		var positions = [
			{ lat: -23.630153, lng: -46.563964 },
			{ lat: -23.625828, lng: -46.571946 },
			{ lat: -23.634006, lng: -46.576066 },
			{ lat: -23.624883 ,lng: -46.564209 }
		];

		return {
			all: function() {
				return positions;
			}
		}

	}])
	.factory('JsonLocations', ['$resource', function ($resource) {
		return $resource('app/assets/locations.json' );

	}]);
