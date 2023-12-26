const {AdminModel} = require("../database/connect");

async function existingAdmin(req, res, next){
    let username = req.headers.username;
    let password = req.headers.password;
    let findAdmin = await AdminModel.findOne({
        username: username,
        password: password,
    });
    
    if (!findAdmin){
        res.status(401).json({
            message: `Admin ${username} does NOT exist`,
            result: {},
        });
        return;
    }
    next();
    return;
}

async function nonExistingAdmin(req, res, next){
    // let {username, password} = req.headers;
    let username = req.headers.username;
    let password = req.headers.password;
    let findAdmin = await AdminModel.findOne({
        username: username,
        password: password,
    });
    
    if (findAdmin){
        res.status(401).json({
            message: `Admin ${username} exists`,
            result: {},
        });
        return;
    }
    next();
    return;
}

module.exports = {
    existingAdmin,
    nonExistingAdmin,
}