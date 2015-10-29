(function(){
	
	'use strict';

	var media = angular.module('media.admin.ctrl', []);

	media.controller('media.admin.ctrl', ['$scope', '$state' , '$http' ,'firebaseInit',
    	function($scope, $state, $http, firebaseInit) {
    		// open conn
    		var ref = firebaseInit;

    		$scope.data = ["home9.png","image.jpg","power26.png"];

   //  		$http({
			//   method: 'GET',
			//   url: '/form/directory.reader.php'
			// }).then(function successCallback(response) {
			//     console.log(JSON.stringify(response.data));
			//   }, function errorCallback(response) {
			//     console.log(response);
			// });

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


