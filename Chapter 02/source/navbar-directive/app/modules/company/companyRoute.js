'use strict';

/**
 * @ngdoc function
 * @name app.route:companyRoute
 * @description
 * # companyRoute
 * Route of the app
 */

angular.module('company')
	.config(function ($routeProvider) {
		$routeProvider
			.when('/company', {
				templateUrl: 'app/modules/company/company.html',
				controller: 'CompanyCtrl'
			});
	});