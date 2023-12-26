// import libraries
const mongoose = require('mongoose');
const fs = require("fs");

// Connect to MongoDB
function readSecret(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (error, secret) => {
            if (!error) {
                resolve(secret);
            }
            else {
                reject("File does NOT exist");
            }
            return;
        });
    });
}

function connectMongoDB(mongoURI) {
    return new Promise((resolve, reject) => {
        try {
            mongoose.connect(mongoURI);
            resolve(":) -> Connected to DataBase");
        }
        catch (error) {
            reject("(: -> Could NOT connect to DataBase");
        }
    })
}

function print(Msg) {
    console.log(Msg);
    return;
}

let readPromise = readSecret("/home/ashup/Desktop/100x/wk3/mongotask/withoutjwt/secrets/mongoURI.txt");
readPromise
    .then((mongoURI) => {
        console.log("Promise1 Fulfilled");
        return connectMongoDB(mongoURI)
    })
    .catch((message) => {
        console.log("Promise1 Rejected");
        print(message);
        return;
    })
    .finally(() => {
        console.log("Promise1 Terminated");
        return;
    })
    .then((message) => {
        console.log("Promise2 Fulfilled");
        print(message);
        return;
    })
    .catch((message) => {
        console.log("Promise2 Rejected");
        print(message);
        return;
    })
    .finally(() => {
        console.log("Promise2 Terminated");
        return;
    })

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    coursesOwned: [{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Course",
        type: Number,
    }]
});

const CourseSchema = new mongoose.Schema({
    courseId: Number,
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
});

// creating models from Schema
const AdminModel = mongoose.model('Admin', AdminSchema);
const UserModel = mongoose.model('User', UserSchema);
const CourseModel = mongoose.model('Course', CourseSchema);

module.exports = {
    AdminModel,
    UserModel,
    CourseModel,
}