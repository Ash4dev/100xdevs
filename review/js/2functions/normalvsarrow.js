function print() {
    console.log(arguments)
}

print("hello", 400, false)

// anonymous function
const printHello = () => {
    console.log("hello")
}


/*  
https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/

No arguments object in arrow functions
Arrow functions do not create their own this binding
Arrow functions cannot be used as constructors
Arrow functions cannot be declared
Arrow functions cannot be accessed before initialization
*/