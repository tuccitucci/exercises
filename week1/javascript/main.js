// Functions

var calculateArea = function(width, height) {
    var a = "test";
    console.log("A: " + a);
    return width * height;
    
}

function calculateArea2(width, height) {
    return width * height;
}

console.log(calculateArea(2, 4));
console.log(calculateArea2(5, 2));

var bill = {};
var alice = {};

bill.doSomething = calculateArea;
bill.doSomething(4, 4);