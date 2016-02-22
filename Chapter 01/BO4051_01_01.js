	// Using inline HTML Templates
	var app = angular.module('myFirstDirective', []);

	app.directive('helloSimpleDirective', function() {
	  return {
		scope: true,  // inherits child scope from parent.
		restrict: 'E', // An Element Sirecitve.
		replace: 'true',
		template: '<h3>Hello Simple Directive</h3>'
	  };
	});


	// Creating a simple Modal Directive
	app = angular.module('SimpleModal', []);

	app.directive('modalWindow', function() {
	  return {
		restrict: 'E',
		scope: {
		  show: '='
		},
		replace: true, // Replace with template
		transclude: true, // To use custom content
		link: function(scope, element, attrs) {

		  scope.windowStyle = {};

		  if (attrs.width) {
			scope.windowStyle.width = attrs.width;
		  }
		  if (attrs.height) {
			scope.windowStyle.height = attrs.height;
		  }

		  scope.hideModal = function() {
			scope.show = false;
		  };
		},
		template: "<div ng-show='show'><div class='modal-overlay' ng-click='hideModal()'></div><div class='modal-background' ng-style='windowStyle'><div class='modal-close' ng-click='hideModal()'>X</div><div class='modal-content' ng-transclude></div></div></div>"
	  };
	});

	app.controller('ModalCtrl', ['$scope', function($scope) {
	  $scope.modalShown = false;
	  $scope.toggleModal = function() {
		$scope.modalShown = !$scope.modalShown;
	  };
	}]);

	<!DOCTYPE html>
	<html>
	<head>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular.js"></script>
	<title>Modal Window Directive</title>
	</head>
	<body ng-app='SimpleModal'>
	  <div ng-controller='ModalCtrl'>
		<button ng-click='toggleModal()'>Open Modal</button>
		<modal-window show='modalShown' width='400px' height='60%'>
		  <p>Hello Simple Modal Window<p>
		</modal-window>
	  </div>
	</body>
	</html>

	// CSS
	.modal-overlay {
	  position:absolute;
	  z-index:9999;
	  top:0;
	  left:0;
	  width:100%;
	  height:100%;
	  background-color:#000;
	  opacity: 0.8;
	}
	.modal-background {
	  z-index:1000;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  background-color: #fff;

	}
	.modal-content {
	  padding:10px;
	  text-align: center;
	}
	.modal-close {
	  position: absolute;
	  top: 5px;
	  right: 5px;
	  padding: 5px;
	  cursor: pointer;
	  display: inline-block;
	}


