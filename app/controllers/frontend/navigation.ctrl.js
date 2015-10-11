(function(){
	
	'use strict';

	var navigation = angular.module('navigation.ctrl', []);

	navigation.controller('navigation.ctrl', ['$scope','$firebaseArray', '$state' ,'firebaseInit', 
    	function($scope, $firebaseArray, $state, firebaseInit) {

    		// open conn
    		var ref = firebaseInit;

			// nav dataset
			var refNav = ref.child("nav").orderByChild("title"); 

			// bind data to scope
			$scope.nav = $firebaseArray(refNav);

  		}]
	);
	
})();


