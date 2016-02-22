'use strict';

/**
 * @ngdoc function
 * @name app.route:aboutRoute
 * @description
 * # aboutRoute
 * Route of the app
 */

angular.module('about')
	.config(function ($routeProvider) {
		$routeProvider
			.when('/about', {
				templateUrl: 'app/modules/about/about.html',
				controller: 'AboutCtrl'
			});
	});