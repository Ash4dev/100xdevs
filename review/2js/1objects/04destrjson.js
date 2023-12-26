let user = {
    name: "Jason",
    age: 21,
    education: "Bachelors",
    domain: "Sciences",
    university: "MIT",
    department: "EECS",
    servers: ['IMC', 'Quant Soc', 'ML Quant']
}

// object destructuring 
let {university: uni} = user; // alternate name/shortner
console.table([user.university, uni]);

// person-generator: https://randomuser.me/api/