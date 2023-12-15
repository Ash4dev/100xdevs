// constrictor leads to singleton

const sym = Symbol("objkey");

let obj = {
    name: "John",
    "last name": "Smith",
    [sym]: 60, // if not [] declared as string
    "e-mail": "js@js.cpm",
    loc: "Jane Street",
    isLoggedIn: false
}

console.table([obj.name, obj["last name"], obj[sym], obj.sym, obj["e-mail"], obj.loc, obj.isLoggedIn])

obj.name = "Jane";
console.log(obj);
// Object.freeze(obj); // like pickling
obj.name = "John";
console.log(obj); // name not reverted back

obj.greet = function(){
    console.log(`Hi ${obj.name} ${obj["last name"]}! Update your current location: ${this.loc}`)
}

obj.greet();
console.log(obj.greet); // function reference
console.log(obj.greet()); // prints and returns undefined


