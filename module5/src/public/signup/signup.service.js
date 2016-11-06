(function () {
'use strict';

angular.module('public')
.service('SignUpService',SignUpService)
.constant('ApiBasePath', "https://evening-reef-94934.herokuapp.com");

SignUpService.$inject = ['$http','ApiBasePath']
function SignUpService ($http, ApiBasePath) {
  var signUpService = this;
  var favoriteDish = "";

  signUpService.saveFavoriteDish = function(dish) {
    signUpService.favoriteDish = dish;
  }

  signUpService.getFavoriteDishDescription = function(dish) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items/"+ dish + ".json")
    });

    return response;
  }

}

})();