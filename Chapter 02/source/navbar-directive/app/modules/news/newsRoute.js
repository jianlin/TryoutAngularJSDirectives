'use strict';

/**
 * @ngdoc function
 * @name app.route:newsRoute
 * @description
 * # newsRoute
 * Route of the app
 */

angular.module('news')
	.config(function ($routeProvider) {
		$routeProvider
			.when('/news', {
				templateUrl: 'app/modules/news/news.html',
				controller: 'NewsCtrl'
			});
	});