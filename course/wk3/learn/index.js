const jwt = require("jsonwebtoken");
const jwtSecret = "stewiegriffin"; // safe at all costs

const value = {
    name: "lol",
    accountNumber: 123213
}

// sign jwt not generate (changes at each run: sign-up)
let token = jwt.sign(value, jwtSecret);
console.log(token);

// verification of jwt (at sign-in)
let valid = jwt.verify(token, jwtSecret);
console.log(valid);

// if modified throws error