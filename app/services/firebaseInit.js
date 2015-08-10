(function(){

	'use strict';

	var firebaseInit = angular.module('firebaseInit', []);

	firebaseInit.factory('firebaseInit',function() {
	    
	    var ref = new Firebase("https://evmotorcycle.firebaseio.com");
	  
    	return ref;
	    
	 });

})();