angular.module("myApp", [])
   .controller("MainCtrl", mainController);

function mainController() {
  var main = this;

  main.markerArray = [];

  main.placeMarker = function($event) {
    if ($event.target.className.indexOf('marker-container') < 0) {
console.log($event);
      var marker = {
        x : $event.pageX - 12,
        y : $event.pageY - 35,
      };

      main.markerArray.push(marker);
    }

  };

  main.removeMarker = function($event, $index) {
    if ($event.target.className.indexOf('marker-container') >= 0) {
      main.markerArray.splice($index,1);
    }
  }
}
