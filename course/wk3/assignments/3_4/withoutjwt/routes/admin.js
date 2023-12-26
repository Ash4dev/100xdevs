const {AdminModel, CourseModel} = require("../database/connect");
const {personValidator, courseValidator} = require("../middleware/validator");
const {existingAdmin, nonExistingAdmin} = require("../middleware/admin")

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

// create existingcourse
adminRouter.post("/courses", existingAdmin, courseValidator, async (req, res) => {
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

adminRouter.get("/courses", existingAdmin, async (req, res) => {
    let allCourses = await CourseModel.find();
    res.status(200).json({
        message: `Courses listed successfully`,
        result: allCourses,
    });
    return;
})

module.exports = {
    adminRouter
}