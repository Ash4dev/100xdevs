// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

function createUser(name, val){
    this.userName = name;
    this.value = val;
}

createUser.prototype.incrementValue = () => {
    // to know about which context we talking about
    ++this.value;
}

createUser.prototype.decrementValue = () => {
    // to know about which context we talking about
    --this.value;
}

// .prototype not needed: syntactic sugar

const lolCats = new createUser("Cats", 100);
const lolDogs = new createUser("Dogs", 100);

// this of createUser
console.log(createUser.prototype);

// leads to error: cannot read properties of undefined if lol Cat/Dog s declared not in a new context
lolCats.incrementValue();
lolCats.incrementValue();

// value doesn't change even after new used
console.log(lolCats.value);
