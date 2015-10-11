(function(){
	
	'use strict';

	var home = angular.module('home.admin.ctrl', []);

	home.controller('home.admin.ctrl', ['$scope', '$location', '$firebaseArray', '$firebaseAuth',
    	function($scope, $location, $firebaseArray, $firebaseAuth) {

    		// open conn
			var ref = new Firebase("https://evmotorcycle.firebaseio.com");

			// specify dataset
			var refNav = ref.child("nav"); 

			// bind data to scope
			$scope.nav = $firebaseArray(refNav);

			// check if user is logged in
  			var authData = ref.getAuth();
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


