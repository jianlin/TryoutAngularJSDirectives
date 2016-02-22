'use strict';

(function() {
    describe('chart directive test', function() {
        //Variables used on tests
        var $scope, elem, iSo;

        //load the app module and all dependencies
        beforeEach(function () {
            module('interface-components');
        });

        beforeEach(inject(function ($rootScope, $compile) {
            $scope = $rootScope.$new();
            //Simulate Data to fill Directive
            $scope.config = {
                data: {
                    columns: [["Motorhead", 48.9], ["Chrome Division", 16.1], ["Hellyeah", 10.9], ["Lynyrd Skynyrd", 17.1]]
                },
                size: {
                    height: 320
                },
                donut: {
                    width: 60
                },
                color: {
                    pattern: ["#3F51B5", "#4CAF50", "#f44336", "#E91E63", "#38B4EE"]
                }
            };
            // Emulate the Directive itself
            elem = '<div charts id="c3-donut" config="config"></div>';

            //complile element
            elem = $compile(elem)($scope);

            //digest the scope to register the elem
            $scope.$digest();
            iSo = elem.isolateScope();

        }));

        // Create an Object
        it('should using isolate scope', function() {
            expect(iSo).toBeDefined('object');
        });

        // Create na onject
        it('should create a config object with iSo scope', function() {
            expect(iSo.config).toBeDefined('object');
        });

        // Update chart when scope change
        it('should update chart', function() {
            $scope.config.data.columns.pop();
            $scope.$digest();
            expect(iSo.config.data.columns.length).toBe(3);
        });

        //if no type is specified it should be set to line
        it('should have a default line chart type', function() {
            $scope.$digest();
            expect(iSo.config.type).toEqual('line');
        });
    });

})();


