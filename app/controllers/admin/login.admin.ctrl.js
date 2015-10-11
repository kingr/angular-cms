(function(){
	
	'use strict';

	var login = angular.module('login.admin.ctrl', []);

	login.controller('login.admin.ctrl', ['$scope', '$state', 'firebaseInit',
    	function($scope, $state, firebaseInit) {

    		
    		console.log(firebaseInit);

    		// set default login values
    		$scope.email = '';
    		$scope.password = '';

    		// attempt login
    		$scope.login = function(){
    			firebaseInit.authWithPassword({
				 	email    : $scope.email,
				  	password : $scope.password
				}, function(error, authData) {
				  if (error) {
				    console.log("Login Failed!", error);
				    alert('Login Failed');
				  } else {
				    $state.go('admin');
				  }
				});
    		}

    		// check if user is already logged in
  			var authData = firebaseInit.getAuth();
  			console.log(authData);
			if (authData){
				$state.go('admin');
			} 
    		

  		}]
	);
	
})();


