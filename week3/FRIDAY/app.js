angular.module("myApp", ["ngRoute"])
  .controller("mainCtrl", mainController)
  .controller("CoffeeOrigins", originsController);

angular.module("myApp")
  .config(Router);

Router.$inject = ["$routeProvider"];

function Router($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: "/templates/home.html"
    })
      .when('/origins', {
        templateUrl: "/templates/origins.html",
        controller: "CoffeeOrigins as oCtrl"
    })
      .when('/menu', {
        templateUrl: "/templates/menu.html"
  })
}

function mainController() {
  var cCtrl = this;

  cCtrl.greeting = "Welcome";

}

function originsController() {
  var oCtrl = this;

  oCtrl.greeting = "Origins:Welcome";

}
