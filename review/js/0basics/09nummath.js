const score = 431.32;
const expScore = new Number(431.32);

// console.table only prints values
console.log(score);
console.log(expScore);

console.table([expScore.toString().length, expScore.toFixed(1)]);
// returns numbers with x digits of precision from start as string
console.table([expScore.toPrecision(4), (100+expScore).toPrecision(4)]);

let num = 1e6;
console.table([num.toLocaleString(), num.toLocaleString("en-IN")]);


// random
num = Math.random(); // 0-1 pseudorandom number
console.log(Math.floor(num*10)+1) // 1-10 random integer

// min-max 
let minVal = 10.72; let maxVal = 29.17;
let type = "incINT";

if (type == "incINT"){
    minVal = Math.floor(minVal); maxVal = Math.ceil(maxVal); // inclusive
}
else{
    minVal = Math.ceil(minVal); maxVal = Math.floor(maxVal); // exclusive
}

for (let i = 0; i < 20; i++){
    num = Math.random();
    console.log(minVal + Math.floor(num*(maxVal-minVal+1)));
}