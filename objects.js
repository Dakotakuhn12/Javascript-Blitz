// What is an object?!
// Object - A collection of related properties and methods
// - property - somethingn an object HAS
// - method - something an object CAN DO

// Objects can be used to represent real world things.

// WHAT IS "this"?
// the keyword "this" is used to help objects use their own data and mehtods.
// it is a reference to the object that is currently being used.

const person = {
    firstName: "Thomas",
    lastName: "Carpenter",
    age: 17,
    isEmployed: false,
    // note: Arrow functions do NOT work with "this"
    // sayHello: (){
    //    console.log("Hi. I'm " + this.firstName);
    // },

    sayHello: function(){
        console.log("Hi. I'm " + this.firstName); // <--- THIS
    },
    "favorite show": "Dukes of Hazard",
    bio: function(){
        return `${this.firstName} ${this.lastName}
        Favorite show: ${this["favorite show"]}
        Age: ${this.age}
        Employes: ${this.isEmployes? "Yes": "Nos"}`
    }
};

//note: we are using DOT NOTATION to access these properties.
console.log(`${person.firstName} ${person.lastName} is ${person.age} 
    years old and ${person.isEmployed? "employed": "seeking work"}`);

person.sayHello();

// you can also access properties with square bracket notation.
console.log(`${person["firstName"]}'s favorite show is ${person["favorite show"]}`
);

console.log(person.bio());