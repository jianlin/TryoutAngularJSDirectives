'use strict';

(function () {
	describe('album test', function () {
		var controller = null, $scope = null;
	
		beforeEach(function () {
			module('interface-components');
		});
		
		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('AlbumCtrl', {
				$scope: $scope
			});
		}));
		
		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
