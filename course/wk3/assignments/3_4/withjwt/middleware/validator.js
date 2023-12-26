const {personValid} = require("../inputValidation/person");
const {courseValid} = require("../inputValidation/course");

function personValidator(req, res, next){
    let {username, password} = req.headers;
    let valid = personValid.safeParse({
        username: username,
        password: password,
    });

    if (!valid.success){
        res.status(401).json({
            message: "Invalid credentials",
            result: {},
        });
        return;
    }
    next();
    return;
}

function courseValidator(req, res, next){
    let {title, description, price, image, author} = req.body;
    let valid = courseValid.safeParse({
        title: title,
        description: description,
        price: price,
        image: image,
        author: author,
    });

    if (!valid.success){
        res.status(401).json({
            message: "Invalid credentials",
            result: {},
        });
        return;
    }
    next();
    return;    
}

module.exports = {
    personValidator,
    courseValidator,
}