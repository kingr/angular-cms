(function(){
	
	'use strict';

	var media = angular.module('media.admin.ctrl', []);

	media.controller('media.admin.ctrl', ['$scope', '$state' ,'firebaseInit',
    	function($scope, $state, firebaseInit) {
    		// open conn
    		var ref = firebaseInit;

    		$scope.data = "my data";

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


