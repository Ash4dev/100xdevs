let name = "John";
let year = 4;
let college = "IIT KGP";

// string interpolation
console.log(`Hey there! I'm ${name}, a ${year}th UG student@${college}. Pleased to meet you.`)

// string defined in constructor
const buddy = new String("James Strauss");
console.table([typeof(name), typeof(buddy)]);
console.table([name[0], buddy[1], buddy[2]]) // 0-indexed

console.log(buddy);
console.log(buddy.length);
console.log(buddy.toLowerCase());
console.log(buddy.charAt(3));
console.log(buddy.indexOf('a')); // returns 1st occurence
console.log(buddy.substring(0,4)) // end not included & +ve only
console.log(buddy.valueOf()); 
// string remains unchanged as strings are inmuttable

let url = "https://google/density exchange.com";
url = url.replace(" ", "%20");
console.log(url);
console.log(url.replace("%20", " "));