function setUserName(userName){
    this.userName = userName;
    console.log("userName set");
}

function createUser(userName, email, password){
    
    
    // setUserName(userName); username not being set
    // setUserName.call(userName); username not being set
    // As the above methods set the userName to the current context of setUserName, which is kicked out as it's execution is completed.
    
    
    // Solution: pass this of createUser to setUserName (passes current EC to another EC)
    setUserName.call(this, userName); // username set 
    this.email = email;
    this.password = password;
}

/* 
if new used:
1. blank object literal created: newInstance
2. newInstance's prototype linked to constructor's prototype (props & methods)
3. Specific value constructor called & bound to newInstance
4. newInstance returned,

*/
let lol = new createUser("lol", "lol@maang.com", "12432");
let lol2 = new createUser("lol2", "lol2@maang.com", "1242132");
console.log(lol);
console.log(lol2);