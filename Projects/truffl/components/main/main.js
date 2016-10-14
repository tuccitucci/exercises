
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
        "Eat More!",
        "Bananas!",
        "Oranges!",
        "You're gonna die!",
        "fdfas",
        "fdfaadfdsafs",
        "agfdgdfsgsdfg",
        "agfdgdfsgsdfg dsfdfadf",
        "agfdgdfsgsdfg dfgsfgdsfg",
        "oieurtoajt"
      ];

      ctrl.currentSuggestion = suggestions[Math.floor(Math.random() * (suggestions.length-1)) + 1];
    }
}
