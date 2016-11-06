(function () {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController)
.constant('ApiBasePath', "https://evening-reef-94934.herokuapp.com.com")

MyInfoController.$inject = ['ApiBasePath', 'SignUpService'];

function MyInfoController(ApiBasePath, SignUpService) {
  var $ctrl = this;
  
  $ctrl.userData = SignUpService.getUserData();
          
  $ctrl.apiBase = ApiBasePath;
  
  console.log("userData: " + $ctrl.userData.firstName);
}

})();