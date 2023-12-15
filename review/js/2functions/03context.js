const user = {
    username: "terminator",
    price: 9e3,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome!`)
        console.log(this); // current context: user objecy
    }
}

user.welcomeMessage();
console.log(this); // returns {}

// expression based function declaration
let x = function (params){
    console.log(this); // obj w interal props not f params
    console.log(this.params); // undefined
}

// arrow based function declaration
let y = (params) => {
    console.log(this); // empty object
    console.log(this.params); // undefined
}

x("lol");
y("lol");

// implicit return (no need to define scope)
const test1 = (a, b) => (a + b) 
test1(3, 10) // returns 13

//explicit return (need to define scope)
const test2 = (a, b) => { return a + b }
test2(3, 10) // returns 13