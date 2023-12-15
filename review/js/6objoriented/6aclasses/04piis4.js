// let desc = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(desc);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

let meow = {
    name: "lolCats",
    work: "memes",
    power: "destruction",

    silence(){
        console.log('Meow!!!!')
    }
};

// a getter
let desc1 = Object.getOwnPropertyDescriptor(meow, "name");
console.log(desc1);

// a setter
Object.defineProperty(meow, "name", {
    writable: false,
    enumerable: false,
})

desc1 = Object.getOwnPropertyDescriptor(meow, "name");
console.log(desc1);

for (const [key, val] of Object.entries(meow)) {
    if (typeof val === "function"){
        continue;
    }
    // name not logged as enumerable false
    console.log(`${key}: ${val}`);
}

// name not changed as not writable
meow.name = "lolDogs";
console.log(meow.name);