var app = angular.module("myApp", []);

app.controller("firstCtrl", function() {
    var clickity = this
    clickity.click = function() {
        console.log("it works");
    }
})


app.controller("secondCtrl", function secondCtrl($scope) {

    $scope.myValue = false;

    $scope.clickAgain = function() {
        $scope.myValue = true;
    };
})



app.controller("thirdCtrl", function thirdCtrl($scope) {

    $scope.myValue = false;

    $scope.oneMoreClick = function() {
        $scope.myValue = true;
    };
})


app.controller("fourthCtrl", function() {
    var clickity = this
    clickity.click = function($event) {
        var userResponse = confirm("Are you sure you want to leave this page?");
        if ( userResponse === false ) {
         $event.preventDefault();
         angular.element($event.target).remove();
        }
    }

})
