'use strict';

(function () {
	describe('mapping test', function () {
		var controller = null, $scope = null;
	
		beforeEach(function () {
			module('yeomananddirectives');
		});
		
		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('MappingCtrl', {
				$scope: $scope
			});
		}));
		
		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
