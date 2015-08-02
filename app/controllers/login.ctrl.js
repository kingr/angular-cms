(function(){
	
	'use strict';

	var login = angular.module('login.ctrl', []);

	login.controller('login.ctrl', ['$scope','$firebaseArray', '$firebaseAuth',
    	function($scope, $firebaseArray, $firebaseAuth) {

      		var ref = new Firebase("https://evmotorcycle.firebaseio.com");
  
      		// create an instance of the authentication service
      		var auth = $firebaseAuth(ref);

      		$scope.login = function() {
		      $scope.authData = null;
		      $scope.error = null;

		      auth.$authAnonymously().then(function(authData) {
		        $scope.authData = authData;
		      }).catch(function(error) {
		        $scope.error = error;
		      });
    		};
  
  		}]
	);
	
})();


