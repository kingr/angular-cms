(function(){

	'use strict';

	var slickslider = angular.module('slickslider', []);

	slickslider.directive('slickslider',function() {
	    
	    return {
	    	template: "hello im a directive {{ home.name }}"
	    }
	    
	 });

})();