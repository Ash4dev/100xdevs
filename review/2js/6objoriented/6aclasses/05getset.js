// to restrict access of object properties to outside, we can define getters & setters

class User{
    constructor(email, password){
        
        // _email, _password added later to indicate private fields(not directly accessible outside), even if leave it as email, password no worries
        this._email = email;
        this._password = password;
        return this;
    }

    // TypeError: Cannot set property password of #<User> which has only a getter. (Need setter too.)
    get password(){
        return this._password.toUpperCase();
    }

    // Setters are not returned 
    set password(value){
        this._password = value;
        // return this._password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(email){
        this._email = email;
        // return this.email
    }
}

let lol = new User("lol@lol.com", "l1o2l3");

// we don't get the direct values, but ones passed through getters and setters (behind the scenes)

// _underscore variable are not made known to the public
console.log(lol.password);
lol.password = "sd j csj ";
console.log(lol.password);