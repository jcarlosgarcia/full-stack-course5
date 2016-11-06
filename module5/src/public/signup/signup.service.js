(function () {
'use strict';

angular.module('public')
.service('SignUpService',SignUpService)
.constant('ApiBasePath', "https://evening-reef-94934.herokuapp.com");

SignUpService.$inject = ['$http','ApiBasePath']
function SignUpService ($http, ApiBasePath) {
  var signUpService = this;
  var favoriteDish = "";
  
  signUpService.saveUserData = function(userData) {
    signUpService.firstName = userData.firstname;
    signUpService.lastName = userData.lastname;
    signUpService.email = userData.email;
    signUpService.phone = userData.phone;
    signUpService.favoriteDish = userData.favoriteDish; 
    
    console.log("User data saved");
    
  }
  
  signUpService.getDish = function(dish) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items/" + dish + ".json")
    });
    
    console.log("dish: " + dish);
   
    
    return response;
  }
  
  signUpService.getUserData = function() {
    var userData = {};
    userData.firstName = signUpService.firstName;
    userData.lastName = signUpService.lastName;
    userData.email = signUpService.email;
    userData.phone = signUpService.phone;
    userData.favoriteDish = signUpService.favoriteDish;
    
    console.log("getUserData: " + userData.firstName + " - " + userData.favoriteDish.short_name);
    
    return userData;
  }

}

})();