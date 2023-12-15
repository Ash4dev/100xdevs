function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function() {return this._email.toUpperCase()},
        set: function(value) {this._email = value;}
    });

    Object.defineProperty(this, 'password', {
        get: function () { 
            return this._password.toUpperCase()
        },
        set: function (value) {
             this._password = value; 
        }
    });

    return this;
}

let lol = new User("lol@woman.com", "lolwoman");
console.log(lol.email, lol.password);
lol.email = "lol@man.com"; 
lol.password = "lolman";
console.log(lol.email, lol.password);

// getters & setters are functions that pose as property of the object
