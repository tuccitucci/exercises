// Question #1

var getName = function(obj) {
  var name = obj.hasOwnProperty('name') ? obj.name : "";

  return name;
}
    console.log(getName({ name: 'Luisa', age: 25 }));

// Question #2

var totalLetters = function(arr) {
  var sumOfLetters = 0

  if (typeof arr !== "object") {
    return 0;
  }
    else {
      for (var i = 0; i < arr.length; i++) {
        sumOfLetters += arr[i].length;
      }
    }
    return sumOfLetters;
}
    console.log(totalLetters("This is a string"))
