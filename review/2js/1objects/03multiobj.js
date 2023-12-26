// identical instantiation ways
const user = {}  
// let user = new Object() // Singleton

const o1 = {1:"a",2:"b"};
const o2 = {3:"c",4:"d"};
const o3 = {5:"e",6:"f"};

// { o1: { '1': 'a', '2': 'b' }, o2: { '3': 'c', '4': 'd' }}
// const o4 = { o1, o2 }; 

// target , sources
// const o4 = Object.assign({}, o1, o2, o3); 

// best way
const o4 = {...o1, ...o2, ...o3}; 


let arr = Object.values(o4); // Object.keys(o4);
for (let i = 0; i < arr.length; i++){ // keys, vals loopable
    console.log(arr[i]);
}

// k,v pairs reported
console.log(Object.entries(o4)); 
console.table([o4.hasOwnProperty(0), o4.hasOwnProperty(1)]);