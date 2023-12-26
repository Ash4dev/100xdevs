const {UserModel, CourseModel} = require("../database/connect");
const {personValidator} = require("../middleware/validator");
const { existingUser, nonExistingUser} = require("../middleware/user")

const {Router} = require("express");
const userRouter = Router();
// userRouter.use(Router.json());

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

userRouter.get("/courses", existingUser, async (req, res) => {
    let allCourses = await CourseModel.find();
    res.status(200).json({
        message: `Courses listed successfully`,
        result: allCourses,
    });
    return;
})

// /courses2/:courseId
userRouter.post("/courses/:courseId", existingUser, async (req, res) => {

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

userRouter.get("/purchasedCourses", existingUser, (req, res) => {
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