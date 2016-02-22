'use strict';

/**
 * @ngdoc function
 * @name app.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the app
 */
angular.module('interfacecomponents')
	.controller('HomeCtrl', ['$scope', '$aside', 'ngCart', function ($scope, $aside, ngCart) {
		$scope.title = "Interface Components";

		// Set dafault state of modal to close
		$scope.asideState = {
			open: false
		};

		// Activate the aside menu using the modal
		$scope.openAside = function(position, backdrop) {
			// Change the default close state
			$scope.asideState = {
				open: true,
				position: position
			};

			function postClose() {
				$scope.asideState.open = false;
			}

			var modalInstance = $aside.open({
				templateUrl: 'app/modules/shared/directives/offcanvas/aside.html',
				placement: position,
				size: 'sm',
				backdrop: backdrop,
				controller: 'AsideCtrl'
			}).result.then(postClose, postClose);
		}

	}]);
