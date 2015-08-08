(function(){
	
	'use strict';

	var specs = angular.module('specs.ctrl', []);

	specs.controller('specs.ctrl', ['$scope',
    	function($scope) {
      		this.dataTest = 'specs page';
  		}]
	);
	
})();


