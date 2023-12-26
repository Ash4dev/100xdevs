/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function getTime() {
    let date = new Date;
    return date.getTime();
}

function wait1(t) {
    return new Promise((resolve, reject) => {
        if (typeof t == "number" && t >= 0) {
            setTimeout(resolve, t * 1e3);
            console.log("Promise Resolved for 1");
        }
        else {
            console.log("Promise rejected for 1");
            reject("E: error!");
        }
        return;
    });
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        if (typeof t == "number" && t >= 0) {
            setTimeout(resolve, t * 1e3);
            console.log("Promise Resolved for 2");
        }
        else {
            console.log("Promise rejected for 2");
            reject("E: error!");
        }
        return;
    });
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        if (typeof t == "number" && t >= 0) {
            setTimeout(resolve, t * 1e3);
            console.log("Promise Resolved for 3");
        }
        else {
            console.log("Promise rejected for 3");
            reject("E: error!");
        }
        return;
    });
}

function calculateTime(t1, t2, t3) {
    let now = getTime();
    return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
        let then = getTime();
        return then-now;
    })
}

module.exports = calculateTime;
