const fs = require("fs");
let fileName = "/home/ashup/Desktop/100x/wk2/assignments/week-2/01-async-js/medium/file2.txt";

function getTime() {
    let date = new Date();
    return date.getTime();
}

let now = getTime();

fs.readFile(fileName, 'utf8', function (error, data) {
    let then1 = getTime();
    console.log("read time:", then1-now);
    if (error) {
        throw error;
    }
    fs.writeFile(fileName, data.trim(), function (error2) {
        let then2 = getTime();
        console.log("write time:", then2-now);
        if (error2) {
            throw error2;
        }
        console.log("Trimmed!")
        return;
    });
    return;
})

// callback hell