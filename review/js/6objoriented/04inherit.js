// How to get inheritance for user-created objects
let animals = {
    sound: true,
    feet: 4
};

let cats = {
    voice: "Meow",
    power: "Land on Feet",
    __proto__: animals, // inherit properties of animals
};

let dogs = {
    voice: "Woof",
    power: "Strong sense of smell",
};

dogs.__proto__ = animals; // inherit properties of animals

// accessible
console.log("cats", cats.feet);
console.log("dogs ", dogs.feet);

// -----------------------NEW----------------------------

let kangaroo = {
    voice: "chortle",
    power: "Boxing",
};

Object.setPrototypeOf(kangaroo, animals);
console.log(kangaroo.feet);