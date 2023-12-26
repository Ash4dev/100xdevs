let arr = new Array(12, 33, 24, 2);
let narr = [1,213,11,1134];
console.table([arr, narr]);

// any type can be inserted/removed 
arr.push(45); arr.pop(); // back
narr.unshift(12); narr.shift(); // front


// arr.join() also includes ',' in string
for (let c = 0; c < arr.join().length; c++){
    console.log(arr.join()[c]);
}

console.log(arr.slice(0,2)); // 12,33
console.log(arr); // not modified

console.log(arr.splice(0, 2)); // 12,33
console.log(arr); // modified

arr.push(narr)
console.log(arr) // arr in arr
arr.pop();

const conc1 = arr.concat(narr);
const conc2 = [...arr, ...narr, ...conc1]; // robust concat
// remove nesting flat(nesting: infinity) 
console.table([conc1, conc2]); // concat arrays


// creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log(Array.from("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis fugiat eum, soluta delectus vero adipisci possimus voluptas consequatur sed omnis asperiores unde corrupti iure sint in repudiandae eveniet? Dicta."));
