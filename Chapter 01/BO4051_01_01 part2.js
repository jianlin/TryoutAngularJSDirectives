
	// loagin external templates
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
		templateUrl: "modal.html"
	  };
	});

	<!DOCTYPE html>
	<html>
	<head>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular.js"></script>
	<title>Modal Window Directive</title>
	</head>
	<body ng-app='SimpleModal'>
		<script type="text/ng-template" id="modal.html">
		  <div ng-controller='ModalCtrl'>
			<button ng-click='toggleModal()'>Open Modal</button>
			<modal-window show='modalShown' width='400px' height='60%'>
			  <p>Hello Simple Modal Window<p>
			</modal-window>
		  </div>
		</script>
	</body>
	</html>

	// The link function
	var app = angular.module('linkdirectives', []);

	app.controller('LinkCtrl', function($scope) {

	});

	app.directive('linkFunction',function(){
	  return{
		restrict: 'AE',
		replace: true,
		template: '<p style="background-color:{{colorName}}">Link Function Directive</p>',
		link: function(scope,element,attribute){
		  element.bind('click',function(){
			element.css('background-color','white');
			scope.$apply(function(){
			  scope.color="white";
			});
		  });
		  element.bind('mouseover',function(){
			element.css('cursor','pointer');
		  });
		}
	  }
	});

	<!DOCTYPE html>
	<html ng-app="linkdirectives">

	  <head>
	  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular.js"></script>
	  <title>Link Function Directive</title>
	  </head>

	  <body ng-controller="LinkCtrl">
		<input type="text" ng-model="colorName" placeholder="Insert a color name"/>
		<link-function/>
	  </body>

	</html>

	// Dealing with tabs without Bootstrap UI Directives
	<!DOCTYPE html>
	<html ng-app="simpleTab">
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular.js"></script>
		<title>Simple tab</title>
		<style>
			.tabs-nav {
				padding: 20px 0 0;
				list-style: none;
			}
			.tabs-nav li {
				display: inline;
				margin-right: 20px;
			}
			.tabs-nav a {
				display:inline-block;
				cursor: pointer;
			}
			.tabs-nav .active {
				color: red;
			}
			.tab-content {
				border: 1px solid #ddd;
				padding: 20px;
			}
		</style>
	</head>

	<div class="tabs-holder" ng-app="simpleTab" ng-init="tab=1">
		<ul class="tabs-nav">
			<li><a ng-click="tab=1" ng-class="{'active' : tab==1}">First tab</a></li>
			<li><a ng-click="tab=2" ng-class="{'active' : tab==2}">Second tab</a></li>
			<li><a ng-click="tab=3" ng-class="{'active' : tab==3}">Third tab</a></li>
		</ul>

		<div class="tabs-container">
			<div class="tab-content" ng-show="tab == 1">
				<h1>First Tab</h1>
				<p>Simple tab 1</p>
			</div>
			<div class="tab-content" ng-show="tab == 2">
				<h1>Second tab</h1>
				<p>Simple tab 2</p>
			</div>

			<div class="tab-content" ng-show="tab == 3">
				<h1>Third Tab</h1>
				<p>Simple tab 3</p>
			</div>
		</div>
	</div>
	</body>
	</html>

	// Example Two
	<!DOCTYPE html>
	<html ng-app="simpleTabController">
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular.js"></script>
		<title>Simple tab with Controller</title>
		<style>
			.tabs-nav {
				padding: 20px 0 0;
				list-style: none;
			}
			.tabs-nav li {
				display: inline;
				margin-right: 20px;
			}
			.tabs-nav a {
				display:inline-block;
				cursor: pointer;
			}
			.tabs-nav .active {
				color: red;
			}
			.tab-content {
				border: 1px solid #ddd;
				padding: 20px;
			}
		</style>
	</head>
	<body>
	<div class="tabs-holder" ng-app="simpleTabController">
	<div id="tabs" ng-controller="TabsCtrl">
		<ul class="tabs-nav">
			<li ng-repeat="tab in tabs"
				ng-class="{active:isActiveTab(tab.url)}"
				ng-click="onClickTab(tab)">{{tab.title}}</li>
		</ul>
		<div id="tab-content">
			<div ng-include="currentTab"></div>
		</div>
		<!--Script templates-->
		<script type="text/ng-template" id="first.html">
			<div class="tab-content" id="1">
				<h1>First Tab</h1>
				<p>Simple tab 1</p>
			</div>
		</script>

		<script type="text/ng-template" id="second.html">
			<div class="tab-content" id="2">
				<h1>Second Tab</h1>
				<p>Simple tab 2</p>
			</div>
		</script>

		<script type="text/ng-template" id="third.html">
			<div class="tab-content" id="3">
				<h1>Third Tab</h1>
				<p>Simple tab 3</p>
			</div>
		</script>
	</div>
	</div>
	</body>
	</html>

	// Controller
	angular.module('simpleTabController', [])

	.controller('TabsCtrl', ['$scope', function ($scope) {
		$scope.tabs = [{
				title: 'First tab',
				url: 'first.html'
			}, {
				title: 'Second tab',
				url: 'second.html'
			}, {
				title: 'Third tab',
				url: 'third.html'
		}];

		$scope.currentTab = 'first.html';

		$scope.onClickTab = function (tab) {
			$scope.currentTab = tab.url;
		}

		$scope.isActiveTab = function(tabUrl) {
			return tabUrl == $scope.currentTab;
		}
	}]);

	// Example Three
	// Example Two
	<!DOCTYPE html>
	<html ng-app="simpleTabController">
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular.js"></script>
		<title>Simple tab with Directive</title>
		<style>
			.tabs-nav {
				padding: 20px 0 0;
				list-style: none;
			}
			.tabs-nav li {
				display: inline;
				margin-right: 20px;
			}
			.tabs-nav a {
				display:inline-block;
				cursor: pointer;
			}
			.tabs-nav .active {
				color: red;
			}
			.tab-content {
				border: 1px solid #ddd;
				padding: 20px;
			}
		</style>
	</head>
	<body>
	<div ng-app='simpleTabDirective'>
	  <ng-tabs>
		<content-tab dat-heading='First tab' dat-tab-active>
		<h1>First Tab</h1>
		<p>Simple tab 1</p>
		</content-tab>
		<content-tab dat-heading='Second tab'>
		  <h1>Second Tab</h1>
		  <p>Simple tab 2</p>
		</content-tab>
		<content-tab dat-heading='Third tab'>
		  <h1>Third Tab</h1>
		  <p>Simple tab 3</p>
		</content-tab>
	  </ng-tabs>  
	</div>
	</body>
	</html>
var app = angular.module("simpleTabDirective", [])

app.directive('ngTabs', function() {
  return {
    scope: true,
    replace: true,
    restrict: 'E',
    transclude: true,
    template: ' \
<div class="tab-content"> \
  <ul class="tabs-nav"> \
    <li ng-repeat="tab in tabs" \
        ng-class="{ active: currentTab == $index }"> \
      <a ng-click="selectTab($index)"> \
        {{tab}} \
      </a> \
    </li> \
  </ul> \
  <div ng-transclude></div> \
</div>',
    controller: function($scope) {
      $scope.currentTab = 0;
      
      $scope.tabs = [];
      
      $scope.selectTab = function(index) {
        $scope.currentTab = index;
      };
      
      return $scope;
    }
  }
})

app.directive('contentTab', function() {
  return {
    require: '^ngTabs',
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: true,
    template: '<div class="tab-content" ng-show="showTab()" ng-transclude></div>',
    link: function(scope, element, attrs, ngTabs) {
      var tabId = ngTabs.tabs.length;
      
      scope.showTab = function() {
        return tabId == ngTabs.currentTab;
      };
      
      ngTabs.tabs.push(attrs.datHeading);
    }
  }
});
