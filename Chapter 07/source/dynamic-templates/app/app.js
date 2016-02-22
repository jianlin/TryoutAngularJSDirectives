'use strict';

/**
 * @ngdoc index
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular.module('dynamic-templates', [
    'ngResource',
    'ui.bootstrap',
    'ngCookies',
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$sceDelegateProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $sceDelegateProvider) {

    // Allow working on localhost or to avoid the video don't work properly
    $sceDelegateProvider.resourceUrlWhitelist(['self', '**']);

    $locationProvider.hashPrefix('!');

    // This is required for Browser Sync to work poperly
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    $urlRouterProvider
        .otherwise('/');

}])

.run(['$rootScope', function ($rootScope) {

    'use strict';

    console.log('AngularJS run() function...');

}]);
