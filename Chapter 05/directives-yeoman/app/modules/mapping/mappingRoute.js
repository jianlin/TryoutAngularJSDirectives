'use strict';

/**
 * @ngdoc function
 * @name app.route:mappingRoute
 * @description
 * # mappingRoute
 * Route of the app
 */

angular.module('mapping')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('mapping', {
				url:'/mapping',
				templateUrl: 'app/modules/mapping/mapping.html',
				controller: 'MappingCtrl'
			});
	}]);
