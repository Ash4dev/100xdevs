function lol(object){
    let ans = "lol" + String(object);
    return ans;
}

const ans1 = lol(3), ans2 = lol("Cats");
const ans3 = lol(); // undefined
console.log(ans1, "", ans2);

// ... -  > rest operator (handle inf arguments)
function seeAllArgs(arg1, arg2, ...args){
    let allargs = [];
    allargs.push(arg1); allargs.push(arg2);
    for (let i = 0; i < args.length; i++){
        allargs.push(args[i]);
    }
    return allargs;
}

let X0 = seeAllArgs(1); console.log(X0); // [ 1, undefined ]
let X1 = seeAllArgs(["apple", "bees", "now you're in NY", "concrete jungles where dreams are made of", "now you're in NY", "NY NY NY!"], 3, 3223)
console.log(X1);

