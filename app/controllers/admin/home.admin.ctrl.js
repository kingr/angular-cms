(function(){
	
	'use strict';

	var home = angular.module('home.admin.ctrl', []);

	home.controller('home.admin.ctrl', ['$scope', '$location', '$firebaseArray', '$firebaseAuth',
    	function($scope, $location, $firebaseArray, $firebaseAuth) {

			var ref = new Firebase("https://evmotorcycle.firebaseio.com");
			ref = ref.child("nav"); 
			

			// check if user is logged in
  			var authData = $firebaseAuth(ref);
  			console.log("authData: " + authData);
			if (!authData){
				$location.path('/login');
			} else {
				$scope.access = "Granted";
			}

			$scope.nav = $firebaseArray(ref);

			// logout
  			$scope.logout = function(){
  				ref.unauth();
  				$location.path('/login');
  			};



  			// add stuff
  			$scope.addMessages = function(){
  				$scope.messages.$add({
  					text: $scope.newMessageText
  				})
  			}


  		}]
	);
	
})();


