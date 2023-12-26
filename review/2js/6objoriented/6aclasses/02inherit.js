class User{
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`UserName: ${this.userName}`);
    };
};

// The extends keyword is used to create a child class of another class (parent). The child class inherits all the methods from another class. Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

class Teacher extends User{
    constructor(userName, email, password){
        // calls parent class's constructor & passes userName param to it.
        
        super(userName); 
        // User.constructor.call(this, userName); fails
        
        // call(this, userName)``
        this.email = email;
        this.password = password;
        return this;
    }

    addCourse(){
        console.log(`${this.userName} added a new course.`)
    }
}

// don't forget new!
let lol = new Teacher("lol", "lol@lol.com", "l1o2l3");
lol.addCourse();

// instanceof: bool
