(function(){
	
	'use strict';

	var login = angular.module('login.ctrl', []);

	login.controller('login.ctrl', ['$scope',
    	function($scope) {

    		var ref = new Firebase("https://evmotorcycle.firebaseio.com");

  			//login 
      		$scope.login = function() {
		      ref.authWithOAuthPopup("facebook", function(error, authData) {
			  		if (error) {
			    		console.log("Login Failed!", error);
			  		} else {
			    		console.log("Authenticated successfully with payload:", authData);
  					}
				}, {
					remember: "sessionOnly",
					scope: "email"
				});
    		};
  
  			// logout
  			$scope.logout = function(){
  				ref.unauth();
  			};

  			// add data to db
  			var isNewUser = true;
	  		ref.onAuth(function(authData) {
					 if (authData && isNewUser) {
					    // save the user's profile into the database so we can list users,
					    // use them in Security and Firebase Rules, and show profiles
					    ref.child("users")
					    	.child(authData.uid)
					    	.set({
					      		provider	: authData.provider,
					      		name 		: getName(authData)
					    	});
	  				}
			});

	  		// find a suitable name based on the meta info given by each provider
			function getName(authData) {
			  switch(authData.provider) {
			     case 'password':
			       return authData.password.email.replace(/@.*/, '');
			     case 'twitter':
			       return authData.twitter.displayName;
			     case 'facebook':
			       return authData.facebook.displayName;
			  }
			};


  		}]
	);
	
})();


