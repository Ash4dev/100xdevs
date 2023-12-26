const {AdminModel} = require("../database/connect");

const jwt = require("jsonwebtoken");
const jwtSecretKey = "oVc8a2FXrb";

async function nonExistingAdmin(req, res, next){
    let {username, password} = req.headers;
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

async function existingAdmin(req, res, next){
    let {username, password} = req.headers;
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

function authorizedAdmin(req, res, next){
    let {authorization} = req.headers;
    try{
        jwt.verify(authorization.substring("Bearer ".length), jwtSecretKey);
        next();
    }
    catch(err){
        res.status(401).json({
            message: "Invalid Credentials",
            result: {},
        })
    }
}

module.exports = {
    existingAdmin,
    nonExistingAdmin,
    authorizedAdmin,
}