const {AdminModel, CourseModel} = require("../database/connect");
const {personValidator, courseValidator} = require("../middleware/validator");
const {existingAdmin, nonExistingAdmin, authorizedAdmin} = require("../middleware/admin")
const {existingCourse} = require("../middleware/course");

const jwt = require("jsonwebtoken");
const jwtSecretKey = "oVc8a2FXrb";
const {Router} = require("express");
const adminRouter = Router();

adminRouter.post("/signup", personValidator, nonExistingAdmin, async (req, res) => {
    let {username, password} = req.headers;
    await AdminModel.create({
        username: username,
        password: password,
    });
    res.status(201).json({
        message: `Admin ${username} created successfully`,
        result: {},
    });
    return;
})

adminRouter.post("/signin", existingAdmin, (req, res) => {
    let {username} = req.headers;
    let bearerToken = jwt.sign({username}, jwtSecretKey);
    req.headers.authorization = `Bearer ${bearerToken}`;
    res.status(200).json({
        message: `Bearer Token for admin ${username} created`,
        result: { bearerToken: `Bearer ${bearerToken}`},
    })
    return;
})

adminRouter.post("/courses", authorizedAdmin, courseValidator, existingCourse, async (req, res) => {
    let {title, description, price, image, author} = req.body;
    await CourseModel({
        courseId: Math.floor(Math.random()*1e9),
        title: title,
        description: description,
        price: price,
        image: image,
        author: author,
    }).save();
    res.status(201).json({
        message: `Course ${title} created successfully`,
        result: {},
    });
    return;
})

adminRouter.get("/courses", authorizedAdmin, async (req, res) => {
    let allCourses = await CourseModel.find();
    res.status(200).json({
        message: `Courses listed successfully`,
        result: allCourses,
    });
    return;
})

module.exports = {
    adminRouter,
}