// object, array, integer, undefined, null, boolean, string, function

// example object with each type of data type

var exampleObj = {
      make:"not a string",
      model:["array","stillanarray","yepstillanarray"],
      year:1954,
      color:{
        blueobject:"blue",
        greenobject:"green"
      },
      fourWD:true,
      gender:undefined,
      favoritemovie:null,
      example:function() {
      return ("la la la");
      }
};

// example array

var exampleArray = [
      "data",
      8,
      {make:"Chevy"},
      true,
      undefined,
      null,
      function() {
        return ("hello")
      },
      ["data",8,true]
    ];



console.log(exampleObj.make);
console.log(exampleObj.model);
console.log(exampleObj.year);
console.log(exampleObj.color);
console.log(exampleObj["fourWD"]);
console.log(exampleObj["gender"]);
console.log(exampleObj["favoritemovie"]);
console.log(exampleObj["example"]);


console.log(exampleArray[0]);
console.log(exampleArray[1]);
console.log(exampleArray[2]);
console.log(exampleArray[3]);
console.log(exampleArray[4]);
console.log(exampleArray[5]);
console.log(exampleArray[6]);
console.log(exampleArray[7]);




// example integer

var exampleInt = 3;

// example boolean

var exampleBoolean = true;

// example string

var exampleString = "hello its me";

// example function

var hippo = function() {
     return ("la la la");
}
