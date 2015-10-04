(function(){
	
	'use strict';

	var home = angular.module('home.admin.ctrl', []);

	home.controller('home.admin.ctrl', ['$scope', '$location', '$firebaseArray', '$firebaseAuth',
    	function($scope, $location, $firebaseArray, $firebaseAuth) {

    		// open conn
			var ref = new Firebase("https://evmotorcycle.firebaseio.com");

			// specify dataset
			ref = ref.child("nav"); 

			// bind data to scope
			$scope.nav = $firebaseArray(ref);

			// check if user is logged in
  			var authData = $firebaseAuth(ref);
  			console.log("authData: " + authData);
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


