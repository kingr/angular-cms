(function(){
	
	'use strict';

	var nav = angular.module('nav.admin.ctrl', []);

	nav.controller('nav.admin.ctrl', ['$scope','$firebaseArray', '$state' ,'firebaseInit',
    	function($scope, $firebaseArray, $state, firebaseInit) {
    		// open conn
    		var ref = firebaseInit;

			// nav dataset
			var refNav = ref.child("nav"); 

			// bind data to scope
			$scope.nav = $firebaseArray(refNav);

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

  			// add new menu item
  			$scope.addMenuItem = function(){
  				$scope.nav.$add({
  					title 	: $scope.newNavTitle,
  					url 	: $scope.newNavUrl
  				})
  			}

  		}]
	);
	
})();


