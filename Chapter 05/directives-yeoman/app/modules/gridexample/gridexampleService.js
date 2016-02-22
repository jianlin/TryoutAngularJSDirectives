'use strict';

/**
 * @ngdoc function
 * @name app.service:gridexampleService
 * @description
 * # gridexampleService
 * Service of the app
 */
angular.module('gridexample')
	.factory('GridexampleService', ['$resource', function ($resource) {
		//return $resource('http://ontariobeerapi.ca:80/beers/');
		return $resource('app/assets/brewer.json');
	}]);
