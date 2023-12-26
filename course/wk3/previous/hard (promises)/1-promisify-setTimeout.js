/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
        if (typeof n == "number" && n > 0 && n < 1e2){
            console.log("Promise Fulfilled");
            setTimeout(resolve, n*1e3);
        }
        else{
            console.log("Promise Rejected");
            reject("E: invalid time!");
        }
        return;
    })
}

module.exports = wait;
