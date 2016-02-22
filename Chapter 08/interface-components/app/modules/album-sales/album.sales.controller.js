'use strict';

/**
 * @ngdoc function
 * @name app.controller:album-salesCtrl
 * @description
 * # album-salesCtrl
 * Controller of the app
 */
angular.module('album-sales')
	.controller('Album-salesCtrl', ['$scope', function ($scope) {

		$scope.splineTitle = "Spline-bar";
		$scope.splineconfig = {
			data: {
				url: '/app/modules/shared/directives/charts/sampleContent.json',
				mimeType: 'json',
				type: "spline",
				types: {
					"Motorhead": "bar"
				}
			},
			color: {
				pattern: ["#3F51B5", "#38B4EE", "#4CAF50", "#E91E63"]
			},

			size: {
				height: 320
			}
		};

		$scope.donutTitle = "Donut";
		$scope.donutconfig = {
			data: {
				columns: [["Motorhead", 48.9], ["Chrome Division", 17.1], ["Hellyeah", 12.9], ["Lynyrd Skynyrd", 21.1]],
				type: "donut"
			},
			size: {
				height: 320
			},
			donut: {
				width: 60
			},
			color: {
				pattern: ["#3F51B5", "#4CAF50", "#f44336", "#E91E63", "#38B4EE"]
			}
		}

		// Charts
		// Line Chart
		$scope.lineTitle = "Line";
		$scope.lineconfig = {
			data: {
				columns: [
					['Hellyeah', 30, 200, 100, 200, 150, 250],
					['Lynyrd Skynyrd', 50, 20, 10, 40, 15, 25]
				]
			}
		};

		// Bar Chart
		$scope.barTitle = "Bar";
		$scope.barconfig = {
			data: {
				columns: [
					['Hellyeah', 30, 200, 100, 400, 150, 250],
					['Lynyrd Skynyrd', 130, 100, 140, 200, 150, 50]
				],
				type: 'bar',
				onclick: function (d, element) {
					alert('yeah ' + JSON.stringify(d));

				}
			},
			bar: {
				width: {
					ratio: 0.5 // this makes bar width 50% of length between ticks
				}
				// or
				//width: 100 // this makes bar width 100px
			}
		};

		// Stacked Bar Chart
		$scope.stackedbarTitle = "Stacked Bar";
		$scope.stackedbarconfig = {
			data: {
				columns: [
					['Motorhead', -30, 200, 200, 400, -150, 250],
					['Chrome Division', 130, 100, -100, 200, -150, 50],
					['Hellyeah', -230, 200, 200, -300, 250, 250]
				],
				type: 'bar',
				groups: [
					['data1', 'data2']
				]
			},
			grid: {
				y: {
					lines: [{value:0}]
				}
			}
		};


		// Pie Chart
		$scope.pieTitle = "Pie";
		$scope.pieconfig = {
			data: {
				columns: [
					["Motorhead", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
					["Chrome Division", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
					["Hellyeah", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
				],
				type: "pie"
			}
		};

	}]);
