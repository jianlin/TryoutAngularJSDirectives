'use strict';

/**
 * @ngdoc function
 * @name app.directive:albumRatingDirective
 * @description
 * # albumRatingDirective
 * Directive of the app
 */
angular.module('interface-components')
	.directive('albumRating', [function () {

		return {
			restrict: 'E',
			require: '?ngModel',
			templateUrl: 'app/modules/shared/directives/album-rating/album.rating.html',
			link: function(scope, element, attrs, ngModel) {
				if (!ngModel) return;

				// Copy from ngModel and place on local scope
				ngModel.$render = function() {
					scope.item = {
						music: ngModel.$viewValue,
						album: ngModel.$viewValue
					};
				};

				// Init score selects
				scope.selects = {

					music: function() {

						// Set score
						var score = 10;

						var musicScore = [];

						// Simple for statement to generate scores
						for (var i = 1; i <= score; i++) {
							var toString = i.toString();
							// Simple number format adding 0 for single number
							musicScore.push((toString.length < 2) ? '0' + toString : toString);
						}

						return musicScore;
					},
					albums: function() {
						var albumsList = ['March or Die', 'Aces of Spades', 'Iron Fist'];

						return albumsList;
					}
				};
				// Listen for chnages
				scope.$watch('item', function(item) {
					// Mandatory filds
					if (attrs.required) {

						var albumIsValid = !!item.album;
						var musicIsValid = !!item.music;

						// Validation
						ngModel.$setValidity('required', albumIsValid || musicIsValid ? true : false);
						ngModel.$setValidity('albumRequired', albumIsValid ? true : false);
						ngModel.$setValidity('musicRequired', musicIsValid ? true : false);

						// ngModel update
						if (albumIsValid && musicIsValid) {
							ngModel.$setViewValue('Best Album: ' + item.album + ' ,Music rating: ' + item.music + ' Stars');
						}
					}
				}, true);
			}
		}
	}]);
