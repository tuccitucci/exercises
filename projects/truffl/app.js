angular.module('myApp', ['ui.router'])
    .config(myRouter)
    .controller("mainCtrl", mainController)
    .controller("navCtrl", navController)
    .controller("secondCtrl", secondController);

function myRouter($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
            url: '/',
            templateUrl: '/templates/main.html',
            controller: 'mainCtrl as mCtrl'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: '/templates/signup.html',
            controller: 'secondCtrl as sCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/templates/about.html'
        });

        $urlRouterProvider.otherwise('/');
}


function mainController() {
    var mCtrl = this;
    mCtrl.greeting = "Main";
}

function secondController() {
    var sCtrl = this;
    sCtrl.greeting = "Second";
}

function navController($state) {
    var nCtrl = this;

    nCtrl.isCurrentRoute = function(stateName) {
      return $state.current.name === stateName;
    }
}
