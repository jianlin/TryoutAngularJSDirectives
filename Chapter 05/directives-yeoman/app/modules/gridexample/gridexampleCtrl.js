'use strict';

/**
 * @ngdoc function
 * @name app.controller:gridexampleCtrl
 * @description
 * # gridexampleCtrl
 * Controller of the app
 */
angular.module('gridexample')
    .controller('GridexampleCtrl', ['$scope', 'GridexampleService', function ($scope, GridexampleService) {

        $scope.myData = GridexampleService.query();

        $scope.gridOptions = {
            data: 'myData',
                paginationPageSizes: [25, 50, 75],
                paginationPageSize: 25,
              columnDefs: [
                {field: 'name', displayName: 'Name'},
                {field:'type', displayName:'Type'},
                { field: 'category', displayName: 'Category'},
                { field: 'brewer', displayName: 'Brewer'},
                { field: 'country', displayName: 'Country'}

                ]
        };

    }]);
