/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function getTime() {
    let date = new Date;
    return date.getTime();
}

function wait1(t) {
    return new Promise((resolve, reject) => {
        if (typeof t == "number" && t >= 0){
            setTimeout(resolve, t*1e3);
            console.log("Promise Resolved for 1");
        }
        else{
            console.log("Promise rejected for 1");
            reject("E: error!");
        }
        return;
    });
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        if (typeof t == "number" && t >= 0){
            setTimeout(resolve, t*1e3);
            console.log("Promise Resolved for 2");
        }
        else{
            console.log("Promise rejected for 2");
            reject("E: error!");
        }
        return;
    });
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        if (typeof t == "number" && t >= 0){
            setTimeout(resolve, t*1e3);
            console.log("Promise Resolved for 3");
        }
        else{
            console.log("Promise rejected for 3");
            reject("E: error!");
        }
        return;
    });
}

function wait4(t){
    let now = getTime();
    return new Promise((resolve, reject) => {

        if (typeof t == "number" && t >= 0) {
            let then = getTime();
            while (then - now <= t*1e3) {
                then = getTime();
            }
            console.log("Promise Fulfilled for 4");
            resolve();
        }
        else {
            console.log("Promise Rejected");
            reject("E: error!");
        }
    })
}

function wait5(t){
    let now = getTime();
    return new Promise((resolve, reject) => {
        if (typeof t == "number" && t >= 0) {
            
        }
    })
}

function calculateTime(t1, t2, t3) {
    let now = getTime();
    return Promise.all([wait1(t1), wait2(t2), wait4(t3)]).then(() =>{
        let then = getTime();
        return then-now;
    })
}

module.exports = calculateTime;
