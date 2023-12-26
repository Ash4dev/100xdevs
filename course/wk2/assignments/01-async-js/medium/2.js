function time12h(){
    let date = new Date;
    console.log(date.toLocaleTimeString('en-IN'));
    return; // never return to setTimeout/setInterval
}

function time24h(){
    let date = new Date;
    let str = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(str);
    return; // never return to setTimeout/setInterval
}

function clock1(){
    setInterval(time12h, 1*1e3);
    setInterval(time24h, 1*1e3);
}

// executed simulataneously
clock1();

function clock2(){
    let timerID = setTimeout(() => {
        time12h();
        let timerID2 = setTimeout(clock2, 5*1e2);
        return;
    }, 5*1e2);
}

clock2();
