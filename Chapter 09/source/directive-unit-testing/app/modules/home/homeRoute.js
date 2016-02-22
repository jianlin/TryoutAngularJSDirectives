'use strict';

/**
 * @ngdoc function
 * @name app.route:HomeRoute
 * @description
 * # HomeRoute
 * Route of the app
 */

angular.module('directive-unit-testing')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl'
			});
	}]);