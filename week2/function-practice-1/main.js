
function tripleFive() {
    for (var i = 0; i < 3; i++) {
        console.log("Five!");
    }
}

tripleFive();

function lastLetter(sillyString) {
    return sillyString.charAt(sillyString.length-1);
}

console.log('Last Letter', lastLetter("hello"));
console.log('Last Letter', lastLetter("island"));


function square(n) {
    return n * n;
}

console.log(square(3));
console.log(square(5));
   
function negate(i) {
    return i - (i * 2);
}   
    console.log(negate(5));
    console.log(negate(-8));
    
// not a function
function toArray(x,y,z) {
    return [x,y,z]
}
    console.log(toArray(1,4,5))
    console.log(toArray(8,9,10))
    
function startsWithA(word) {
    // if (word.charAt(0).toLowerCase() === "a") {
    //     return true;
    // } else {
    //     return false;
    // }
    
    return word.charAt(0).toLowerCase() === "a";
}

console.log(startsWithA("aardvark"))
console.log(startsWithA("Aardvark"))
console.log(startsWithA("bear"))


function excite(broncos) {
    return broncos + "!!!";
}

console.log(excite("yes"));
console.log(excite("go"));


function sun(hawk) {
    return hawk.indexOf("sun") >=0;
}

console.log(sun("sundries"));
console.log(sun("asunder"));
console.log(sun("catapult"));

function tiny(x) {
    return x > 0 && x < 1;
}

console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));

function getSeconds(time) {
    var timeArray = time.split(":");
// console.log(timeArray);
    var minutes = timeArray[0] * 60;
// console.log(minutes);
    return parseInt(minutes) + parseInt(timeArray[1]);
}

console.log(getSeconds("01:30"));
console.log(getSeconds("10:25"));