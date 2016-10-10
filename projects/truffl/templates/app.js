angular.module('myApp', ['ngRoute'])
    .controller("mainCtrl", mainController)
    .controller("secondCtrl", secondController);

angular.module('myApp')
    .config(myRouter);

myRouter.$inject = ['$routeProvider'];

function myRouter($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/index.html'
        })
        .when('/signup/:id', {
            templateUrl: '/templates/signup.html',
            controller: "secondCtrl as sCtrl"
        })
        .when('/about', {
            templateUrl: '/templates/about.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}


function mainController() {
    var mCtrl = this;

    mCtrl.greeting = "Welcome to Bozo Coffee";


}

function secondController() {
    var sCtrl = this;

    sCtrl.greeting = "Second";
}
