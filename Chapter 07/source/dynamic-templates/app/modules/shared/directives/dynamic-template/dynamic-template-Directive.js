'use strict';

/**
* @ngdoc function
* @name app.directive:DynamicTemplateDirective
* @description
* # dynamicTemplateDirective
* Directive of the app
*/
angular.module('dynamic-templates')
	.directive('contentItem', function ($compile) {

		var imageTpl = '<div class="media"><div class="media-left"><a href="{{content.src}}"><img class="media-object img-thumbnail" ng-src="{{content.src}}" alt="content.title"></a></div><div class="media-body"><h2 class="media-heading">{{content.title}}</h2><p>{{content.description}}</p></div></div>';
		var videoTpl = '<div class="entry-video"><h2>{{content.title}}</h2><div class="entry-vid"><iframe ng-src="{{content.src}}" width="100%" height="300" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div><div class="entry-text"><div class="text-justify">{{content.description}}</div></div></div>';
		var textTpl = '<div class="panel panel-default"><div class="panel-body"><h1>{{content.title}}</h1><p class="lead">{{content.src}}</p></div></div>';

		var getTemplate = function(type) {
			var template = '';

			switch(type) {
				case 'image':
				template = imageTpl;
				break;
				case 'video':
				template = videoTpl;
				break;
				case 'text':
				template = textTpl;
				break;
			}

			return template;
		}

		var linkF = function(scope, element, attrs) {
			element.html(getTemplate(scope.content.type)).show();
			$compile(element.contents())(scope);
		}

		return {
			restrict: "E",
			link: linkF,
			scope: {
				content:'='
			}
		};
	}).directive("postItem", function() {
		return {
			template: '<ng-include src="getTemplateUrl()"/>',
			scope: {
				item: '=data'
			},
			restrict: 'E',
			controller: function($scope) {
				//Pass a tpl to ng-include
				$scope.getTemplateUrl = function() {
					//We can place this piece in diferent services
					if ($scope.item.type == "image")
					return "app/modules/shared/directives/dynamic-template/image-tpl.html";
					if ($scope.item.type == "video")
					return "app/modules/shared/directives/dynamic-template/video-tpl.html";
					if ($scope.item.type == "text")
					return "app/modules/shared/directives/dynamic-template/text-tpl.html";
				}
			}
		};
	});
