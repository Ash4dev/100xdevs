// https://javascript.info/settimeout-setinterval#tasks

/*
let date = new Date();
let now = date.getTime();
for (let o = 0; o < 5; o++){
    setTimeout(() => {
        let newDate = new Date();
        let then = newDate.getTime();
        console.log(`${(then-now)/1000}: ${o}`)
    }, 1e3);
    console.log("out: ", o);
}

out:  0 out:  1 out:  2 out:  3 out:  4 
1.003: 0  - 1.025: 1  - 1.026: 2  - 1.026: 3  - 1.027: 4

Iterative fails as synchronous part executed first & setTimeout pushed to callback queue immeadiately
*/ 

// recursive timeouts(cnt: 4->5.....->11(clear) all return)
function lol(cnt, to) {
    if (cnt <= to) {
        console.log(cnt++);
        timerID2 = setTimeout(lol, 5 * 1e2, cnt, to);
    }
    // removed at cnt: 11 rest just returned
    else {
        clearTimeout(timerID2);
    }
    return;
}

function printNumbers(from, to){
    let cnt = from;
    let timerID = setTimeout(lol, 5*1e2,cnt, to);

    // cnt: 3 never executed
    // if (cnt > to){
    //     clearTimeout(timerID);
    // }
}

printNumbers(3, 10);