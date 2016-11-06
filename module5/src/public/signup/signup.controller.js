(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var signup = this;

  signup.submit = function () {
    
    signup.msg = "";
    
    SignUpService.getDish(signup.user.short_name)
      .then(function (response) {
        signup.user.favoriteDish = response.data;
        console.log("items: " + signup.user.firstname + " - " + signup.user.short_name + " - " + signup.user.favoriteDish.description);
        //SignUpService.saveFavoriteDish(signup.user.short_name);
        SignUpService.saveUserData(signup.user);
        signup.msg = "Your data has been saved";
      })
      .catch(function (error) {
        console.log(error);
        signup.msg = "No such menu number exists";
      });

  };
}

})();