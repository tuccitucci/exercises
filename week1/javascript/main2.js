function move(speed) {
    //typeof is an operator that will return the type that a variable/value is
    console.log(typeof speed);
    
    if(typeof speed === 'string') {
        console.log("We moved at a " + speed + " pace!");
    }
    else
    {
        console.log("We couldn't move!");
    }
}

move("fast");
move(5);
//var something = !something;


// function doThing(porykman, digiman)
// {
//     //ES6 - Template literals
//     console.log(`The ${porkyman} fights the ${digiman}`);
    
//     console.log(arguments);
    
//     for (var i=0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }

// doThing('Pikachewed', 'Augerman');

// Scoping
// LExical scoping - variables declared inside of a scopeare inaccessible outside of that scope
// Dynamic scoping - everytime a function is executed (called or invoked)it creates a scope. This scope only exists while the function is running.

function myFunc(){
    var potato = 'spudtacular';
    console.log(potato)
    return potato;
}

console.log (myFunc());
myFunc();

// Garbage collection
    // process of destroying unused variables to free up memory
    // If a value/object has no reference, it will be garbage collected
    
var Pikachewed = {
    name: 'Pikachewed',
    move: 'Thunderstuff',
}
 
var porkymans = Pikachewed

Pikachewed = null; // the object that the variable Pikachewed USED to be assigned to is garbage collected

    
    
    
var Charmangler = {
    name: 'Charmangler',
    trainer: {
        name: 'Ash',
        age: 10
    }
}

var ash = Charmangler.trainer;
Charmangler = null;

console.log(Charmangler, ash)

// Callback functions

var delayInMilliseconds = 3000; // 3 seconds

var timeoutID = setTimeout(function() {
    console.log("Testing");
} 
delayInMilliseconds