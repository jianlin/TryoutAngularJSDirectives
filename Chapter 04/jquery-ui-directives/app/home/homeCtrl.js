'use strict';

/**
 * @ngdoc function
 * @name app.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the app
 */
angular.module('jquerydirectives')
	.controller('HomeCtrl', ['$scope', function ($scope) {
		$scope.title = "Hello, Angm-Generator!";

}]).controller('DateCtrl', function($scope) {
		$scope.date = new Date();
		
}).directive('datepicker', function() {
	return {
		restrict: 'A',
		require : 'ngModel',
		link : function (scope, elem, attrs, ngModelCtrl) {
				elem.datepicker({
					dateFormat:'dd/mm/yy',
					onSelect: function (date) {
						ngModelCtrl.$setViewValue(date);
						scope.$apply();
					}
				});
		}
	}
}).directive('resizebox', function () {

    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            elem.resizable();
        }
    };
}).directive('progressbar', function () {

    return {
        restrict: 'A',
        scope: {
            progress: '=progressbar'
        },
        // link: function postLink(scope, elem, attrs) {
		// 	elem.progressbar({
        //       value: scope.progress
        //     });
        // },
		compile: function () {
       		return function (scope, elem) {
				elem.progressbar({
	              value: scope.progress
         		});
       		};
     	}
    };
}).controller('progressbarCtrl', function ($scope) {
	// Set a value to the progressbar
    $scope.value = 30

}).directive('draggable', function () {

    return {
        restrict: 'A',
		scope: {},
        link: function (scope, elem, attrs) {
            elem.draggable({
				revert: "invalid",
			});
        }
    };
}).directive('droppable', function () {

    return {
        restrict: 'A',
        scope: {},
        link: function (scope, elem, attrs) {
            elem.droppable({
				activeClass: "ui-state-default",
      			hoverClass: "ui-state-hover",

				drop:function(event,ui) {
					$(this).addClass( "ui-state-highlight" )
					.find( "p" )
					.html( "Dropped!" );
				}
			});
        }
    };
});
