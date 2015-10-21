(function(){
	
	'use strict';

	var home = angular.module('home.ctrl', []);

	home.controller('home.ctrl', ['$scope','$firebaseObject', '$state' ,'firebaseInit',
    	function($scope, $firebaseObject, $state, firebaseInit) {

    		// open conn
    	   var ref = firebaseInit;

         	// define Intro data object
			var obj = $firebaseObject(ref.child("home").child('intro'));

         	// add three-way data binding to scope
			obj.$bindTo($scope, "intro");

  		}]
	);
	
})();


