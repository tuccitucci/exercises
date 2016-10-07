angular.module("app", [])
  .controller("parkingCntl", parkingController)
  .controller("restaurantCntl", restaurantController)
  .factory("locationFact", locationFactory);


parkingController.$inject = ["locationFact"];
restaurantController.$inject = ["locationFact"];

function parkingController(locationFact) {
  var park = this;
  park.greeting = "Hello";

  park.lots = locationFact.lots;
  park.restaurants = locationFact.restaurants;

  park.filterLots = function(element, index) {
    return element.capacity > 49;
  }
}

function restaurantController(locationFact) {
  var rest = this;
  rest.greeting = "Hello again";

  rest.restaurants = locationFact.restaurants;
  rest.lots = locationFactory.lots;

  rest.restFilter = {};

  rest.getNearestLot = function(index) {
    return rest.lots[index].location;

  }



}




function locationFactory() {
  var lotsData = this;

  var lotsData = [
    {
      capacity: 20,
      cost: 10.00,
      location: "Larimer Square"

    },
    {
      capacity: 100,
      cost: 3.50,
      location: "Loch Ness"

    },
    {
      capacity: 50,
      cost: 5.00,
      location: "Downtown"

    },

  ];

  var restaurantsData = [
    {
      name: "Pioneer Pete's",
      menu: ["Pioneer Pizza", "Heart Attack Burger"],
      style: "American"

    },
    {
      name: "Hooter's",
      menu: ["Wings", "Beer", "Nachos"],
      style: "Blue Collar"

    },
    {
      name: "Linger",
      menu: ["Sliders", "Goat Cheese wrapped in Bacon on a Stick"],
      style: "Really Good"

    },
];

return {
  lots: lotsData,
  restaurants: restaurantsData,
}


}
