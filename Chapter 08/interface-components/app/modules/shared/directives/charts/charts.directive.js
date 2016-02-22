'use strict';

/**
 * @ngdoc function
 * @name app.directive:chartsDirective
 * @description
 * # chartsDirective
 * Directive of the app
 */
angular.module('interface-components')
	.directive('charts', [function () {

		return {
			restrict: 'EA',
			template: '<div></div>',
			scope: {
				config: '='
			},
			link: function (scope, element, attrs) {
				// Default type
				if(!scope.config.type) scope.config.type = 'line';

				//generate c3 chart data
				var chartData = scope.config;
				chartData.bindto = '#' + attrs.id;

				var chart = c3.generate(chartData);

				scope.$on("c3.resize", function(e, data) {
					chart.resize();
				});
			}

		}

	}]);
