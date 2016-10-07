angular.module('goldRushApp', []);

angular.module('goldRushApp', [])
  .controller('goldRushController', ['$scope', function($scope) {

    // array to store a list of marker objects
    $scope.markers = [];
    // boolean variable to show writeNote div
    $scope.writeNote = false;
    // boolean variable to display note.
    // $scope.showNote = false;

    // function to place marker on the map
    $scope.placeMarker = function(event) {
      // a marker object to store the x and y coordinates of the location where the mouse was clicked and notes.
      $scope.marker = {
        x : event.pageX,
        y : event.pageY,
        note : "",
        showNote: false
      };

      // prompt to enter note and open the note-popup div upon confirmation
      var notePrompt = confirm("Do you want to add a note to the marker?");
      if (notePrompt) {
        $scope.writeNote = !$scope.writeNote;
      }

      // marker is pushed to the markers array
      $scope.markers.push($scope.marker);
    };

    // function to remover marker from map
    $scope.removeMarker = function(index) {
      $scope.markers.splice(index,1)
    }

    // function to hide note-popup div
    $scope.closeNoteEntryPopUp = function() {
      $scope.writeNote = false;
    }

    // function to display or hide read-note-popup div
    $scope.showPopUpNote = function(index) {
      if ($scope.markers  [index].note != "") {
        $scope.markers[index].showNote = !$scope.markers[index].showNote;
      }
    }

  }]);
