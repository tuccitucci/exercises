
angular.module('myApp').controller("mainCtrl", mainController);

function mainController() {
    var ctrl = this;

    ctrl.currentNutrChoice = null;
    ctrl.currentSuggestion = null;
    ctrl.dailyFoods = [];

    // data is put on the global scope by the database.js
    ctrl.data = data;

    ctrl.addFood = function addFood() {
      ctrl.dailyFoods.push(ctrl.currentNutrChoice);
      ctrl.currentNutrChoice = null;
      updateSuggestion();
    }

    function updateSuggestion() {
      var suggestions = [
        "You need more calcium in your diet...Have some yogurt!",
        "Your magnesium intake is unacceptable...organic brown rice would help!",
        "Do you have a problem with Vitamin D? No? Good...eat some tuna!",
        "Brussel Sprouts! No? Well figure out something else with Vitamin C to eat!",
      ];

      ctrl.currentSuggestion = suggestions[Math.floor(Math.random() * (suggestions.length-1)) + 1];
    }
}
