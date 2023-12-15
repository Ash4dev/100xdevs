class User1{
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}lol`;
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`;
    }
}

let lol1 = new User1("al", "al@gmail.com", "2323");
console.log(lol1.encryptPassword());
console.log(lol1.changeUserName());

// ------------------Behind the Scene---------------------

function User2(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password;
    return this;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}lol`;
}

User2.prototype.changeUserName = function () {
    return `${this.userName.toUpperCase()}`;
}

let lol2 = new User2("al", "al@gmail.com", "2323");
console.log(lol2.encryptPassword());
console.log(lol2.changeUserName());