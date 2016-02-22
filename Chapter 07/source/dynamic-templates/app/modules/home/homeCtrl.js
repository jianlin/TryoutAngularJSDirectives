'use strict';

/**
 * @ngdoc function
 * @name app.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the app
 */
angular.module('dynamic-templates')
	.controller('HomeCtrl', ['$scope', 'homeService', '$http', function ($scope, homeService, $http) {
		$scope.title = "Hello, Angm-Generator!";

		$scope.url = 'app/modules/shared/directives/dynamic-template/content.json';

		$scope.content = [];

		$scope.getContentFromFile = function() {
			$http.get($scope.url).then(function(result){
				$scope.content = result.data;
			});
		}

		$scope.getContentFromFile();

		$scope.posts = homeService.all();

	}]);
