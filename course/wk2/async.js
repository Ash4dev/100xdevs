async function example(lol) {
    console.log('Start');
    const result = await setTimeout(() => console.log(lol),2*1e3);
    console.log('After await');
    return result;
}

example("kim's convinience");
let cnt = 0;
for (let i = 0; i < 1e10; i++){
    cnt += i;
}
console.log(cnt);