'use strict';

/**
 * @ngdoc function
 * @name app.route:albumRoute
 * @description
 * # albumRoute
 * Route of the app
 */

angular.module('album')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('album', {
				url:'/album',
				templateUrl: 'app/modules/album/album.html',
				controller: 'AlbumCtrl'
			});
	}]);
