// for (let i = 0; i < 20; i++){
//     let date = new Date(); // 2023-12-05T05:22:15.168Z
//     console.table([date, date.toString(), date.toISOString(), date.toUTCString()]);
// }

let myDate = new Date(2023,1,24); // 0-indexed months
console.log(myDate.toDateString());

let now = Date.now();
console.table([now, Math.floor(now/1000)]); // ms, s

