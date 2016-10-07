angular.module("myApp")
  .controller("theWand", wandCtrl);

  function wandCtrl () {
    console.log("Alakazaam");
    var wand = this;

    wand.spellList = [];

    window.wand = wand;

    wand.greeting = "Any sufficiently advanced technology is indistinguishable from magic.";

    wand.addSpell = function() {
      wand.spellList.push( wand.newSpell );
    }

  }
