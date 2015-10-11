(function(){
	
	'use strict';

	var home = angular.module('home.ctrl', []);

	home.controller('home.ctrl', ['$scope', 
    	function($scope) {

    		this.title = "Welcome to my blog! Here I document the process of converting a Hyosung GT250R to pure electric. The goal is also to push the envolope of technology and pack the bike with extremely advanced features.";
    		this.slides = ["im one","im two",];
    		this.name = "It is common to attach Controllers at different levels of the DOM hierarchy. Since the ng-controller directive creates a new child scope, we get a hierarchy of scopes that inherit from each other. The $scope that each Controller receives will have access to properties and methods defined by Controllers higher up the hierarchy. See Understanding Scopes for more information about scope inheritance.";
  		}]
	);
	
})();


