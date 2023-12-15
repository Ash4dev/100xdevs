const players = ["Messi", "Ronaldo", "Rooney"]; // Array
let wrestler = {
    name: "John",
    lastName: "Cena",
    age: 45,
    brand: "Smackdown"
}; // Object

let myFunc = function(){
    console.log("Hello World");
    console.table([typeof(null), typeof(undefined), typeof(players), typeof(wrestler), typeof(myFunc)]);
}

myFunc();
