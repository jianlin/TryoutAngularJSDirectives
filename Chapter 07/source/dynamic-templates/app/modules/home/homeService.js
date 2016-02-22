'use strict';

/**
 * @ngdoc function
 * @name app.service:homeService
 * @description
 * # homeService
 * Service of the app
 */
angular.module('dynamic-templates')
	.factory('homeService', ['$resource', function ($resource) {

		var posts = [
			{"type" : "image", "name" : "Black Label Society", "src" : "https://upload.wikimedia.org/wikipedia/en/b/bd/Sonic_Brew_Original_Cover.jpg", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
			{"type" : "video", "name" : "2016 Harley-Davidson Motorcycles 883", "src" : "http://www.youtube.com/embed/_dOxZX5gz0U"},
			{"type" : "text",  "name" : "Some Text Example ", "src": "Sample Text about crazy Motorcycles goes here."}
		];

		return {
			all: function () {
				return posts;
			}
		}

	}]);
