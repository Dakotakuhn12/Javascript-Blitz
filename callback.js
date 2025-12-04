/* What is a callback? */
/*
    A callback is a function that is passed as an argument to another function. The recieveing function calls it when appropriate.
*/

function adios() {
    console.log("adios");
}

// hola();
// adios();

// imagine that hola is a function that takes time to run (like making a request to a server or loading a file)

function hola(callbackFunction) {
    //simulate taking time
    setTimeout(() => {
        console.log("hola");
        callbackFunction()
    }, 2000);
}

hola(adios)
console.log("passed hola");

function sum(x,y,callback){
    let result = x+y
    callback(result);
}

function printValue(value) {
    console.log(`The result is ${value}`);
}

sum(5, 6, printValue)

/* Summary */
// A callback is a way to control when functions run
// Used with tasks that often take time to finish (often asynchronous)
// You can still pass data to callbacks.