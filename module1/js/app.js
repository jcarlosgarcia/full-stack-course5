(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
    
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.fontColor = "color: black;";
  $scope.borderColor = "";
  $scope.itemList = "";
  
  $scope.checkIfTooMuch = function () {
    console.log("clicked " + $scope.itemList);
      if ($scope.itemList == "") {
        $scope.message = "Please enter data first";
        $scope.fontColor = "color: red;";
        $scope.borderColor = "border: solid red;";
      } else {
        $scope.fontColor = "color: green;";
        $scope.borderColor = "border: solid green;";
        var items = $scope.itemList.split(',');

        if (items.length <= 3) {
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too much!";
        }
      }
      
  };


}

})();
