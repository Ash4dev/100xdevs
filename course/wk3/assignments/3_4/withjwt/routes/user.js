const {UserModel, CourseModel} = require("../database/connect");
const {personValidator} = require("../middleware/validator");
const { existingUser, nonExistingUser, authorizedUser} = require("../middleware/user")

const jwt = require("jsonwebtoken");
const jwtSecretKey = "oVc8a2FXrb";
const {Router} = require("express");
const userRouter = Router();

userRouter.post("/signup", personValidator, nonExistingUser, async (req, res) => {
    let {username, password} = req.headers;
    await UserModel.create({
        username: username,
        password: password,
    });
    res.status(201).json({
        message: `User ${username} successfully created`
    });
    return;
})

userRouter.post("/signin", existingUser, (req, res) => {
    let {username} = req.headers;
    let bearerToken = jwt.sign({username}, jwtSecretKey);
    req.headers.authorization = `Bearer ${bearerToken}`;
    res.status(200).json({
        message: `Bearer Token for user ${username} created`,
        result: { bearerToken: `Bearer ${bearerToken}` },
    })
})

userRouter.get("/courses", authorizedUser, async (req, res) => {
    let allCourses = await CourseModel.find();
    res.status(200).json({
        message: `Courses listed successfully`,
        result: allCourses,
    });
    return;
})

// /courses2/:courseId
userRouter.post("/courses/:courseId", authorizedUser, async (req, res) => {
    let user = req.user;
    let courseId = parseInt(req.params.courseId);

    // check if course exists 
    let course = await CourseModel.find({
        courseId: courseId,
    });
    
    if (!course.length){
        res.status(404).json({
            message: `Course with ${courseId} does NOT exist`,
            result: {},
        });
        return;
    }
    
    // check if course purchased (bad request)
    if (user.coursesOwned.length > 0){
        let owned = user.coursesOwned.includes(course[0].courseId);
        if (owned){
            res.status(400).json({
                message: `Course ${course[0].title} is already bought`,
                result: {},
            })
            return;
        }
    }

    // buy course
    user.coursesOwned.push(course[0].courseId);
    user.save(); // update user 
    res.status(200).json({
        message: `Course ${course[0].title} successfully purchased`
    });
    return;
})

userRouter.get("/purchasedCourses", authorizedUser, (req, res) => {
    let user = req.user;
    let owned = user.coursesOwned;
    res.status(200).json({
        message: "Bought Courses are listed",
        result: owned,
    });
})

module.exports = {
    userRouter
}