(function(){
	
	'use strict';

	var home = angular.module('home.admin.ctrl', []);

	home.controller('home.admin.ctrl', ['$scope','$firebaseArray','firebaseInit',
    	function($scope, $firebaseArray, firebaseInit) {
    		// open conn
    		var ref = firebaseInit;

			// nav dataset
			var refNav = ref.child("nav"); 

			// bind data to scope
			$scope.nav = $firebaseArray(refNav);

			// check if user is logged in
  			var authData = ref.getAuth();
  			console.log("authData: " + JSON.stringify(authData));
			if (!authData){
				$location.path('/login');
			} else {
				$scope.access = "Granted";
			}

			// logout
  			$scope.logout = function(){
  				ref.unauth();
  				$location.path('/login');
  			};

  			// add menu item
  			$scope.addMenuItem = function(){
  				$scope.nav.$add({
  					title: $scope.newNavTitle,
  					url: $scope.newNavUrl
  				})
  			}

  		}]
	);
	
})();


