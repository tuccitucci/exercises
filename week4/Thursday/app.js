class Wizard {
  constructor(name, spells, level) {
    this.name - name;
    this.spells - spells;
    this.level - level;
    this.name - name;
  }
}

var harry = new Wizard("Harry", ["fire", "wind", "skittles"], 32);
var draco = new Wizard("Draco", ["coffee", "water", "disappear"], 45 );

class Warlock extends Wizard {
  constructor(name, spells, level, undeadCritter) {
    super(name, spells, level);
    this.undead = undeadCritter;
  }
}

var tim = new Warlock("Tim", ["has tools", "raises the dead"], 5, "Michael Jackson");
