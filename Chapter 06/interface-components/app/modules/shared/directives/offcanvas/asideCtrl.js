'use strict';

/**
 * @ngdoc function
 * @name app.controller:AsideCtrl
 * @description
 * # AsideCtrl
 * Controller of the app
 */
angular.module('interfacecomponents')
	.controller('AsideCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {

		// Close modal
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	}]);
