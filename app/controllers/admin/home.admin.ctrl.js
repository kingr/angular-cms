(function(){
	
	'use strict';

	var home = angular.module('home.admin.ctrl', []);

	home.controller('home.admin.ctrl', ['$scope', '$location',
    	function($scope, $location) {

    		var ref = new Firebase("https://evmotorcycle.firebaseio.com");

    		// check if user has admin rights
  			var authData = ref.getAuth();
			if (!authData){
				$location.path('/login');
			} else {
				$scope.access = "Granted";
			}

  		}]
	);
	
})();


