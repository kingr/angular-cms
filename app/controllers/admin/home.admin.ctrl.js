(function(){
	
	'use strict';

	var home = angular.module('home.admin.ctrl', []);

	home.controller('home.admin.ctrl', ['$scope','$firebaseObject', '$state' ,'firebaseInit',
    	function($scope, $firebaseObject, $state, firebaseInit) {
    	   
         // open conn
    	   var ref = firebaseInit;

         // define Intro data object
			   var obj = $firebaseObject(ref.child("home").child('intro'));

         // add three-way data binding
			   obj.$bindTo($scope, "data");

			   // check if user is logged in
  			 var authData = ref.getAuth();
    		 if (!authData){
    				$state.go('login');
    		 } else {
    				$scope.access = "Granted";
    		 }

			   // logout
  			 $scope.logout = function(){
  			   ref.unauth();
  			   $state.go('login');
  			 };

  		}]
	);
	
})();


