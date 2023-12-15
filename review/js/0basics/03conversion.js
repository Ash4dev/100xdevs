let score = 69; // sure of it being int
let rollC = "321";
let rollW = "9ea2"; // "2e2": 2*10^2
let damn = null;
let wut = undefined;
let bool = true;

let val_rollC = Number(rollC);
let val_rollW = Number(rollW);
let val_damn = Number(damn);
let val_wut = Number(wut);
let val_bool = Number(bool);

// forceful conversion to new datatype

console.table([typeof val_rollC, typeof val_rollW, typeof val_damn, typeof val_wut, typeof val_bool])

console.table([val_rollC, val_rollW, val_damn, val_wut, val_bool])

let state = 1;
let Num = 23
let stringNum = String(Num);
let val_state = Boolean(state);
console.table([val_state, stringNum]);
