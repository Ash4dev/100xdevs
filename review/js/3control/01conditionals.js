let val = 1e3;

// implicit scope (avoid generally)
if (val > 5e2) console.log("yo dawg"), console.log("change it!"); // ; leads to statement termination


const quarter = 3;
switch (quarter) {
    case 1:
        console.log("Quarter 1")    
        break;
    case 2:
        console.log("Quarter 2")    
        break;
    case 3:
        console.log("Quarter 3")    
        break;
    case 4:
        console.log("Quarter 4")    
        break;
    default:
        break;
}

// The nullish coalescing operator (??) provides a concise way to 
// assign a default value to a variable if the variable is null or undefined.
// (??) considers values that are not null or undefined as truthy. 
const res1 = undefined ?? 'Default'; // res7: 'Default'
const res2 = null ?? 'Default'; // res1: 'Default'
const res3 = NaN ?? 'Default';  // res3: 'Default'
const res4 = false ?? 'Default';// res5: false
const res5 = true ?? 'Default'; // res7: true
const res6 = '' ?? 'Default';   // res2: ''
const res7 = {} ?? 'Default';   // res6: {}
const res8 = 0 ?? 'Default';    // res4: 0

let val1 = 67;

let fin = (val1 > 45) ? console.log("ok") : console.log("not ok")

let score = 0;
do{
    console.log("score: ", score);
    ++score;
}
while(score < 5)

// forof
const myA = [242, 2, 313, 12]
for (let balance of myA) {
    console.log(2*balance);
}

//forin
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}