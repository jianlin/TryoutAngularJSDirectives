'use strict';

/**
 * @ngdoc index
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
var app = angular.module('bootstrap-ui-directives', [
    'ngResource',
     'ngCookies',
     'ngAnimate',
     'ngTouch',
     'ngSanitize',
     'ngRoute',
     'ui.bootstrap'
]);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

    $locationProvider.hashPrefix('!');

    // This is required for Browser Sync to work poperly
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    $routeProvider
        .otherwise({
            redirectTo: '/'
        });

}]);

app.run(['$rootScope', function ($rootScope) {

    'use strict';

    console.log('Angular.js run() function...');

}]);
