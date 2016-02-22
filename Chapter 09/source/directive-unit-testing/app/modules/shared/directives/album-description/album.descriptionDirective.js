'use strict';

/**
 * @ngdoc function
 * @name app.directive:album-descriptionDirective
 * @description
 * # album-descriptionDirective
 * Directive of the app
 */
angular.module('directive-unit-testing')
	.directive('albumDescription', [function () {

		return {
			restrict: 'E',
			templateUrl: 'app/modules/shared/directives/album-description/album.description.html',
			scope: {
				item: '='
			},
			controller: function ($scope) {
				$scope.opened = false;

				return $scope.toggle = function () {
					return $scope.opened = !$scope.opened;
				};
			}

		}

	}]);
