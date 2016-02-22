'use strict';

/**
 * @ngdoc index
 * @name app
 * @description
 * # app
 *
 * Main modules of the application.
 */

angular.module('about',[]);

angular.module('company',[]);

angular.module('news',[]);

angular.module('navbar',[]);


var app = angular.module('navbarexample', [
    'ngResource',
    'ngCookies', 
    'ngAnimate', 
    'ngTouch', 
    'ngSanitize', 
    'ngRoute',
    'about',
    'company',
    'news',
    'navbar',
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
