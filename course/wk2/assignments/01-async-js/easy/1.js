function printNumbers(from, to) {
    let cnt = from;
    let timerID = setInterval(() => {
        if (cnt <= to) {
            console.log(cnt++);
        }
        else {
            clearInterval(timerID);
        }
    }, 1 * 1e3);
}

printNumbers(3, 10);

// https://morioh.com/a/2e1c6c90f85a/how-to-turn-settimeout-and-setinterval-into-promises
// promise implementation
let promise = new Promise((resolve, reject) => {
    let error = false;
    if (!error){
        setInterval(resolve, 1*1e3);
    }
    else{
        reject("E: error!");
    }
})

promise
.then(() => {
    console.log("Promise Fulfilled");
    console.log(cnt);
})
.catch((errorMessage) => {
    console.log("Promise Rejected");
    console.log(errorMessage);
})
// .finally(() => {
//     console.log("Promise Termianted");
// })