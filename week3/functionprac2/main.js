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

// Question #3

var keyValue = function(key,value) {
    var x = (typeof key === "string");
    var y = (typeof value !== undefined);
    var obj = {}

    if (x && y) {
      obj[key] = value;
    }

    return obj;
}

    console.log(keyValue("city","Denver"))

// Question #4

var negativeIndex = function(arr,num) {
  var x = (typeof arr === 'object');
  var y = (num < 0);
  var neg = (x & y) ? arr[arr.length+num] : "";
  return neg;
}

  console.log(negativeIndex(['a','b','c','d','e'], -2));
  console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));
