let lolCats = "  Meow! Meow!    ";
let arr = [1,2];

// add trueLength property to string (trims)
// 1. addd trueLength prop to Object as top-most hierarchy
// 2. give property to string only

Object.prototype.lolM = () => {
    console.log("Cat says Meow!");
};

// this doesn't work with arrow function
String.prototype.trueLength = function(){
    console.log(`${this}`);
    return this.trim().length;
    // return str.trim().length; WORKS
}

console.log(lolCats.trueLength()); // Meow! Meow!

lolCats.lolM();
arr.lolM();
// arr.trueLength(); // not available with arr (only string specific)

 