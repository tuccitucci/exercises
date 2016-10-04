var app = angular.module("myApp", []);

app.controller("firstCtrl", function($scope){

    $scope.click = function(){
    console.log("it works");
  }
})


app.controller("secondCtrl", function secondCtrl($scope){

    $scope.myValue = false;

    $scope.clickAgain = function(){
      $scope.myValue = true;
    };
  }
)
