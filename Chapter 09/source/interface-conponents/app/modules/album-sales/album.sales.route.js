'use strict';

/**
 * @ngdoc function
 * @name app.route:album-salesRoute
 * @description
 * # album-salesRoute
 * Route of the app
 */

angular.module('album-sales')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('album-sales', {
				url:'/album-sales',
				templateUrl: 'app/modules/album-sales/album.sales.html',
				controller: 'Album-salesCtrl'
			});
	}]);
