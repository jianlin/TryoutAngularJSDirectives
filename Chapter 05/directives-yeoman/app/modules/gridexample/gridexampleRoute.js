'use strict';

/**
 * @ngdoc function
 * @name app.route:gridexampleRoute
 * @description
 * # gridexampleRoute
 * Route of the app
 */

angular.module('gridexample')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('gridexample', {
				url:'/gridexample',
				templateUrl: 'app/modules/gridexample/gridexample.html',
				controller: 'GridexampleCtrl'
			});
	}]);
