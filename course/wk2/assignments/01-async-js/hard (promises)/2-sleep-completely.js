/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function getTime(){
    let date = new Date;
    return date.getTime();
}

function sleep(ms) {
    let now = getTime();
    return new Promise((resolve, reject) => {

        if (typeof ms == "number" && ms > 0){
            let then = getTime();
            while (then-now < ms) {
                then = getTime();
            }
            console.log("Promise Fulfilled for 2");
            resolve();
        }
        else{
            console.log("Promise Rejected");
            reject("E: error!");
        }
    })
}

module.exports = sleep;
