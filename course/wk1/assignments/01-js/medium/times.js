/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {

    let date1 = new Date();
    let sum = 0;
    for (let j = 1; j < n; j++) {
        sum += j;
    }
    let date2 = new Date();
    return (date2.getTime() - date1.getTime()) / 1000;
}

let x = calculateTime(1e27);
console.log(x);