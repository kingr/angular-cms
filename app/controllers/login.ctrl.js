(function(){
	
	'use strict';

	var login = angular.module('login.ctrl', []);

	login.controller('login.ctrl', ['$scope', '$location',
    	function($scope, $location) {

    		var ref = new Firebase("https://evmotorcycle.firebaseio.com");



  			//login 
  			/*
      		$scope.login = function() {
		      ref.authWithOAuthPopup("facebook", function(error, authData) {
			  		if (error) {
			    		console.log("Login Failed!", error);
			  		} else {
			  			$location.path('/admin');
			    		console.log("Authenticated successfully with payload:", authData);
  					}
				}, {
					remember: "sessionOnly",
					scope: "email"
				});
    		};
  */
  			// logout
  	/*		$scope.logout = function(){
  				ref.unauth();
  			};
*/
  			// broadcast login status
  			//$scope.user = ref.getAuth();
  		}]
	);
	
})();


