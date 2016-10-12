angular.module('pokeApp', [])
  .controller("PokeCtrl", pokeController);

pokeController.$inject = ["$http"];

function pokeController($http) {
  var poke = this;



  poke.getMyPokemon = function() {
    console.log(poke.pokeNum)
    $http.get("http://pokeapi.co/api/v1/pokemon/"+poke.pokeNum)
    .then(function(res, status){
console.log(res.data)
        poke.myPoke = res.data;
    },
    function(res, status){
        console.log("Failure:",status);
    });
  }



      // get the pokemon object using a function inside of the controller
      poke.getPokemon = function ($http) {
          $http.get('http://pokeapi.co/api/v1/pokemon/138')
          .then(function(res, status){
              console.log("Success:",res);
              console.log("Status:",status);
              // the response object has a .config object, a .data object, etc.
              // the information we really want is in the response.data object (name, weight, height)
              poke.poke2 = res.data;
          }, function(res, status) {
              console.log("Failure:",status);
          });
      }
  }




  // poke.greeting = "Hello you lovely lovely people!"
//
//   getPokemon($http, poke);
//
//   poke.getPokemon
//
//
//
// function getPokemon($http, poke) {
//   $http.get("http://pokeapi.co/api/v1/pokemon/22")
//   .then(function(res, status){
//       console.log("Success:",res);
//       poke.firstData = res.data;
//   },
//   function(res, status){
//       console.log("Failure:",status);
//   },
//   function(res, status){
//
//   })
// }
