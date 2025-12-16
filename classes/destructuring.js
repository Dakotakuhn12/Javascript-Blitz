//I Thomas Carpenter LOVE Ed Sheeran
// desctructuring - is a quick and convenient way to extract values
// from arrays and objects and assign them to variables
// use square brackets [] for array destructuring
// use curly braces {} for object destructuring:

//example:
const colors = ["red", "orange", "yellow", "green", "blue"];
// imagine a scenario where we want these in their own variables
/* our goal:
//NOT DESTRUCTURING EXAMPLE
let c1 = colors[0];
let c2 = colors[1];
let c3 = colors[2]; 
let c4 = colors[3]; 
let c5 = colors[4];
*/
//Destructuring!
const [c1, c2, c3, c4, c5] = colors;

console.log(c1);
console.log(c2);

//simple example
// swap

let a = 5;
let b = 9;
//write code to put the value of a into b and the value of b into a
//There's a catch!
//You get no other variables
[b, a] = [a, b];
console.log(b);

const [col1, col2] = colors;
console.log(col1);
const [clr1, clr2, ...clrs] = colors;

console.log(clr1);
console.log(clr2);
console.log(clrs);

//destructuring objects:
const ed = {
  firstName: "Ed",
  lastName: "Sheeran",
  age: 34,
  job: "artist",
};

const elton = {
  firstName: "Elton",
  lastName: "John",
  job: "artist",
};

//to destructure an object, use {} and specify the property names
//const { firstName, lastName, age, job } = ed;
//console.log(firstName);
// add a default age
const { firstName, lastName, age = 78, job } = elton;
console.log(firstName);
console.log(age);

// destructuring in function parameters:
// Old way:
function displayPerson(person) {
  console.log(`Name: ${person.firstName} ${person.lastName}`);
  console.log(`Age: ${person.age}`);
  console.log(`Job: ${person.job}`);
}
displayPerson(ed);

function displayPersonDestructured({
  firstName,
  lastName,
  age = 50,
  job = "unemployed",
}) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`Job: ${job}`);
}
displayPersonDestructured(ed);
