(function(){
	
	'use strict';

	var addPosts = angular.module('addPost.admin.ctrl', []);

	addPosts.controller('addPost.admin.ctrl', ['$scope','$firebaseArray', '$firebaseObject', '$state' ,'firebaseInit',
    	function($scope, $firebaseArray, $firebaseObject, $state, firebaseInit) {
    	   
         // open conn
    	   var ref = firebaseInit;

         // posts data set
         var refPosts = ref.child("posts");

         // bind posts to scope
         $scope.posts = $firebaseArray(refPosts);

         // bind categories to scope
         var categoriesData = $firebaseObject(ref.child("nav").child("item"));

         // construct categories array for use in select box
         var categoriesArray = [];

         // use a promise to load the categories
         categoriesData.$loaded().then(function() {
            // loop over object
            angular.forEach(categoriesData, function(value, key) {
              // push data to array
              categoriesArray.push({name: value.title})

              console.log(value.title);
              
            });
         });

         // add new post
         $scope.addNewPost = function(){
          $scope.posts.$add({
            postTitle       : $scope.postTitle,
            postDesc        : $scope.postDesc,
            postCategory    : $scope.data.repeatSelect,
            timestamp       : Firebase.ServerValue.TIMESTAMP
          }).then(function(){
            alert('Success!');
          }, function(){
            alert('Fail');
          });
         }

         // populate categories list
         $scope.data = {
            repeatSelect: null,
            availableOptions: categoriesArray
         };

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


