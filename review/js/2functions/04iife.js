// function: anonymous, named(declared/exp, arrow)

// unnamed IIFE
((db = "apple") => {
    console.log(`connected to ${db}`);
})("alibaba");

// named IIFE
(function x (){
    console.log("connected :)")
})(); 

// named IIFE
(lol = function(db = "netflix"){
    console.log(`connected to ${db}`);
})();

lol("amazon");


// no global scope pollution
let p = 10;
(function () {
    let p = 14;
    console.log(p);
})();
console.log(p);

