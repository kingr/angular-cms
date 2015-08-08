(function(){
	
	'use strict';

	var login = angular.module('login.admin.ctrl', []);

	login.controller('login.admin.ctrl', ['$scope', '$location',
    	function($scope, $location) {

    		var ref = new Firebase("https://evmotorcycle.firebaseio.com");

    		console.log(ref);

  		}]
	);
	
})();


