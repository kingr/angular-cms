(function(){

	'use strict';

	var mediaGalleryContructor = angular.module('mediaGalleryContructor', []);

	mediaGalleryContructor.directive('mediaGalleryContructor',function() {
	  
	  	function link(scope, element){
	  		
	  		var data = scope.data;

	  		var container = element;

			var createImg = function(src){

				// contruct img tag
				var img = document.createElement("img");
				img.src = 'uploads/' + src;

				// append image to container
				container.appendChild(img);

			};

			for(var i=0; i < data.length; i++) {

				// create images
				createImg(data[i]);

			}

	  	}

	    return {
	    	restrict : 'E',
	    	scope: {
	    		data: '='
	    	},
			link: link	    	
	    }
	    
	 });

})();