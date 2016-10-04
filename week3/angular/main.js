angular.module("Superheroes", [])
  .controller("theAvengers", avengersController);

function avengersController(){
  var aCtrl = this;
    aCtrl.title = "Every team needs a captain";
    aCtrl.heroes = ["Captain America",
                    "Iron Man",
                    "Captain Obvious",
                    "Thor"];
    aCtrl.newAvenger = "" ;

aCtrl.addNewHero = function(){
    aCtrl.heroes.push(aCtrl.newAvenger)
}

}
