'use strict';

/**
 * @ngdoc index
 * @name app
 * @description
 * # app
 *
 * Main modules of the application.
 */

angular.module('mapping', []);

angular.module('login', []);

angular.module('gridexample', []);


angular.module('yeomananddirectives', [
    'ngResource',
    'ui.bootstrap',
    'ngCookies',
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'mapping',
    'login',
    'ui.grid',
    'ui.grid.pagination',
    'gridexample',
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

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
