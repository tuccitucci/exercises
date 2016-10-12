// ES6
class Cereal {
    constructor(name, sweetness, crunchFactor, mascotName) {

        this.name = name;
        this.sweetness = sweetness;
        this.crunchFactor = crunchFactor;
        this.mascotName = mascotName;
        this.servings = 4;

    }

    makeYouFat() {
      console.log(this.name + " will make you super fat man!");
    }

    pour() {
      if(this.servings <= 0) {
        console.log("Nothing Left!");
        return;
      }
      this.servings--;

      if(this.servings === 1) {
        console.log("Better buy more cereal!");
      } else if(this.servings === 0) {
        console.log("Your bowl is empty man! So So Sad!")
      }
        console.log("Crunch Crunch!");
    }

    buyNewBox() {
      this.servings = 4;
    }

}
var kix = new Cereal("Kix", 3, 7, "A Kid");
var luckyCharms = new Cereal("Lucky Charms", 8, 5, "Lucky the Leprechaun");
var fruitLoops = new Cereal("Fruit Loops", 7, 7, "Toucan Sam");
var raisinBran = new Cereal("Raisin Bran", 4, 3, "Sunny");
