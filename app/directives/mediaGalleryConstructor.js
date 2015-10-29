(function(){

	'use strict';

	var mediaGalleryContructor = angular.module('mediaGalleryContructor', []);

	mediaGalleryContructor.directive('mediaGalleryContructor',function() {
	  
	    
	    return {
	    	template: "hello im a directive {{ home.name }}"
	    }
	    
	 });

})();