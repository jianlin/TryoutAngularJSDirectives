'use strict';

/**
 * @ngdoc function
 * @name app.route:HomeRoute
 * @description
 * # HomeRoute
 * Route of the app
 */

angular.module('jquerydirectives')
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/home/home.html',
				controller: 'HomeCtrl'
			});
	});
