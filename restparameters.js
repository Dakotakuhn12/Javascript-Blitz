// rest parameters allow a function to accept a variable number of arguments.
function myFunction(name, ...values){ // notice the ... (this actually packs up the REST)
    // values is stored in an array
    console.log(`Hello ${name}`);
    console.log(`Here's the info I have on you: `);
    for (val of values) {
        console.log(val);
    }
}

myFunction(
    "Mr. Klins",
    "spaced out",
    "balding",
    "tries...but often fails",
    "cocomelon voice actor"
);

// write a function that accepts a vaariable number of arguments and returns the average
// you may assume all arguments are numbers.
// example call"
//getAverage(5,6); getAverage(5,6,7,8,9); getAverage(3);

function getAverage(...values) {
    console.log(values);
    sum = 0;
    for (val in values) {
        sum += val
    }
    let avg = sum / values.length
    console.log(avg)
}

getAverage(2, 2, 4);