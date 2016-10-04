angular.module("app", [])
  .controller("mainCtrl", mainController);

function mainController(){
  console.log("Hello controller!");
  var main = this;

  main.monkeys = [
    "Koko",
    "Casey",
    "Harambe",
    "Cheetah"
  ];

  main.monkeyObjs = [
    {
    "name":"Koko",
    "biz":"eat",
    "food":["cheetos","grass"]
  },
    {
    "name":"Casey",
    "biz":"ride bikes",
    "food":["coffee","shell casings","bananas"]
  },

  ];


  main.monkeyDupes = [
    "Casey",
    "Casey",
    "Matt",
    "Steve"

  ];
};
