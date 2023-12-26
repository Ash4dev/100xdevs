const promise1 = new Promise((resolve, reject) => {
    // Do async tasks: DB calls, Network Call 
    setTimeout(() => {
        console.log("async task done!")
        resolve();
    }, 1 * 1e3);
});

promise1.then(() => {
    console.log("Promise Consumed")
})

let promise2 = new Promise((resolve, reject) => {

    // database calls
    setTimeout(() => {
        let error = false;
        if (!error) {
            let obj = {
                "username": "lolcats",
                email: "lol@lolcats.com",
                mobile: "748378292"
            };
            resolve(obj);
        }
        else {
            // reject(new Error('DB Call went wrong.'))
            reject("error!!!!!!!!!!!!!!!");
        }
    }, 1e3);
})


// Promise Chaining
promise2.then((nolol) => {
    console.log("Promise Fulfilled");
    console.log(nolol);
    return nolol.email;
}).then((email) => {
    console.log(email);
}).catch((error) => {
    console.log("Promise Rejected")
    console.log(error);
}).finally(() => {
    console.log("Promise Terminated")
})

// Alternative
async function consumePromise2() {
    try {
        let response = await promise2;
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
consumePromise2();