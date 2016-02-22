'use strict';

(function() {
    describe('album Description Directive', function () {
        var scope = null, element = null;

        beforeEach(function () {
            module('directive-unit-testing');
        });

        beforeEach(inject(function ($controller, $rootScope, $compile) {
            element = angular.element(
                '<div class="card">'+
                    '<div class="album">'+
                        '<img src="https://placehold.it/150x150" alt="{{ item.band }} - {{ item.title }}" />'+
                    '</div>'+
                    '<div class="content">'+
                        '<p>{{ item.band }}<br>{{ item.title }}</p>' +
                            '<button type="button" class="btn btn-default" ng-click="toggle()">Details</button>'+
                        '</div>'+
                        '<div class="description" ng-show="opened">' +
                            '<p>{{item.description}}</p>'+
                        '</div>' +
                    '</div>'
            );

            scope = $rootScope;
            $compile(element)(scope);
            scope.$digest();
        }));

        it('Should Created Details Button', function () {

            var buttons = element.find('btn');
            expect(buttons.length).toBe(4);
        });

    });
})();


