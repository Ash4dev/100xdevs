
let fs = require("fs");
let fileName = "/home/ashup/Desktop/100x/wk2/assignments/week-2/01-async-js/easy/file.txt";

function lol(data) {
    console.log(data);
}

function getTime() {
    let date = new Date();
    return date.getTime();
}

let now = getTime();

fs.readFile(fileName, 'utf8', function(error, data){
    let then = getTime();
    if (error){
        throw error;
    }
    console.log(then-now);
    lol(data);
    return;
})

// for (let i = 0; i < 1e10; i++){
//     if (i % 1e9 == 0){
//         console.log(i);
//     }
// }

// The intensive operation will be completed first, & till that time the readFile operation sits in the callback queue.

/*
0
1000000000
2000000000
3000000000
4000000000
5000000000
6000000000
7000000000
8000000000
9000000000
time taken(ms): 107255
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur autem sapiente id reprehenderit nobis error iste, repellendus in labore possimus architecto quaerat veritatis ab sunt, eius voluptas aliquid. Quia facilis culpa temporibus perspiciatis eaque eius eveniet iste, velit impedit. Dolor, perferendis reiciendis blanditiis magni aut doloremque voluptatibus. Ab ad vel doloribus, perspiciatis qui similique quasi, ex voluptatibus magnam ullam, quae consequatur voluptate ut!
*/