(function(){
	
	'use strict';

	var home = angular.module('home.admin.ctrl', []);

	home.controller('home.admin.ctrl', ['$scope', '$location', 'firebaseInit',
    	function($scope, $location, firebaseInit) {

    		// check if user is logged in
  			var authData = firebaseInit.getAuth();
			if (!authData){
				$location.path('/login');
			} else {
				$scope.access = "Granted";
			}

			// logout
  			$scope.logout = function(){
  				firebaseInit.unauth();
  				$location.path('/login');
  			};

  		}]
	);
	
})();


