const players = ["Messi", "Ronaldo", "Rooney"]; // Array
let wrestler = {
    name: "John",
    lastName: "Cena",
    age: 45,
    brand: "Smackdown"
}; // Object


// location *independent* callability
myFunc1();
function myFunc1(){
    console.log("Hello World");
    console.table([typeof (null), typeof (undefined), typeof (players), typeof (wrestler), typeof (myFunc)]);
}


// myFunc2(); leads to error
// location *dependent* callability: expression based
let myFunc2 = function () {
    console.log("Hello World");
    console.table([typeof (null), typeof (undefined), typeof (players), typeof (wrestler), typeof (myFunc)]);
} 
myFunc2();

// let a;

if (true){
    function x(lol){
        console.log(lol);
        return lol;
    }

    let a = x(3);
}

// console.log(a); leads to error if defined inside