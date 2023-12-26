const {UserModel} = require("../database/connect");

async function existingUser(req, res, next){
    // let {username, password} = req.headers;
    let username = req.headers.username;
    let password = req.headers.password;
    let findUser = await UserModel.findOne({
        username: username,
    });
    
    if (!findUser){
        res.status(401).json({
            message: `User ${username} does NOT exist`,
            result: {},
        });
        return;
    }
    req.user = findUser;
    next();
    return;
}

async function nonExistingUser(req, res, next){
    // let {username, password} = req.headers;
    let username = req.headers.username;
    let password = req.headers.password;
    let findUser = await UserModel.findOne({
        username: username,
    });
    
    if (findUser){
        res.status(401).json({
            message: `User ${username} exists`,
            result: {},
        });
        return;
    }
    next();
    return;
}

module.exports = {
    existingUser,
    nonExistingUser
}