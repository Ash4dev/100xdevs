function user(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Yo, ${this.userName} dawg!`)
    }

    // done implicitly anyway
    return this;
}

// initially empty object created
let one = new user("John", 12, false);
let two = new user("Lolx", 34, true);
let three = new user();

// use new to avoid current scope from getting altered
console.log(one);
console.log(two.constructor); // reference to self
console.log(three.greeting()); // all properties are undefined

// check if part of our instance, using isInstanceOf