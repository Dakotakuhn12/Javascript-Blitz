/* foreach works with arrays. Just a convient way to loop through a list */
/* You pass a callback function to process each element */

let numbers = [2, 4, 6, 8, 14];

function display(element, index, array) {
    console.log(
        `The element: ${element} \nThe index ${index}\nThe array ${array}`
    );
}

numbers.forEach(display);

/* How it works */
/*
three arguments are provided to the callback

array.forEach(function(element, index, array){
    // some code
})
*/

//modifiy the array in our callback:
function double(e, i, a){
    a[i] = e * 2;
}

numbers.forEach(double);
console.log(numbers);

//anonymous function
numbers.forEach(function(e,i,a){
    a[i] = e / 2;
});

console.log(numbers);

let foods = ["acid", "tacos", "cats"]

foods.forEach((e,i,a)=>{
    console.log(e.toUpperCase());
})