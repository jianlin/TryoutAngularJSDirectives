'use strict';

(function() {
	describe('about test', function () {
    	var controller = null, $scope = null;
    
	    beforeEach(function () {
	        module('navbarexample');
	    });
	    
	    beforeEach(inject(function ($controller, $rootScope) {
	        $scope = $rootScope.$new();
	        controller = $controller('AboutCtrl', {
	            $scope: $scope
	        });
	    }));
	    
	    it('Should controller must be defined', function () {
	        expect(controller).toBeDefined();
	    });

	});
})();
