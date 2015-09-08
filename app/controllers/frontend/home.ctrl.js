(function(){
	
	'use strict';

	var home = angular.module('home.ctrl', []);

	home.controller('home.ctrl', ['$scope', 
    	function($scope) {

    		this.title = "Welcome to my blog! Here I document the process of converting a Hyosung GT250R to pure electric. The goal is also to push the envolope of technology and pack the bike with extremely advanced features.";
    		this.slides = ["im one","im two",];
    		this.name = "kurt";
  		}]
	);
	
})();


