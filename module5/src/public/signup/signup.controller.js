(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var signup = this;

  signup.submit = function () {
    
    signup.erroMsg = "";
    signup.saveMsg = "";
    
    SignUpService.getFavoriteDishDescription(signup.user.short_name)
      .then(function (response) {
        signup.items = response.data;
        SignUpService.saveFavoriteDish(signup.user.short_name);
        signup.msg = "Your data has been saved";
      })
      .catch(function (error) {
        console.log(error);
        signup.msg = "No such menu number exists";
      });

  };
}

})();