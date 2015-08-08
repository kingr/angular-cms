(function(){
	
	'use strict';

	var home = angular.module('home.ctrl', []);

	home.controller('home.ctrl', ['$scope', '$location',
    	function($scope, $location) {

    		this.title = "Im the home page"

  		}]
	);
	
})();


