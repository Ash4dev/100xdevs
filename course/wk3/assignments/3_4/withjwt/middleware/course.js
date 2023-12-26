const { CourseModel } = require("../database/connect");

async function existingCourse(req, res, next) {
    let { title, description, price, image, author } = req.body;
    let findCourse = await CourseModel.findOne({
        title: title,
        price: price,
        image: image,
        author: author,
    });

    if (findCourse) {
        res.status(401).json({
            message: `Course ${title} already exists`,
            result: {},
        });
        return;
    }
    next();
    return;
}

module.exports = {
    existingCourse,
}