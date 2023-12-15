function outer(){
    let name = "lol";
    function inner(){
        let secret = "lolagain";
        console.log("INNERx", name, secret);
    }
    inner();
    return;
    // console.log(secret); not avail in its lexical scope
}

outer();
// console.log(name); not avail in its lexical scope

// CLOSURE
function outer(){
    let name = "lol";
    function innerTWO() {
        console.log("INNERmeTWO", name);
    }
    function inner(){
        console.log("INNERme", name);
    }
    innerTWO();
    return inner;
}

let x = outer();
x();

// practical example of closure (if not break DRY )
function clickHandler(color){
    return function(){
        document.body.style.backgroundColor = `${color}`;
    }
}

let colarr = ["orange", "green", "purple"];

for (const color of colarr) {
    clickHandler(color);
}


// outer is now overwritten (above call doesn't run)
// also since, inner is returned to x. It comes along with its parent's scope EC(memory & functions), even though only the inner function is executed.
