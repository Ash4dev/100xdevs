const {UserModel} = require("../database/connect");

const jwt = require("jsonwebtoken");
const jwtSecretKey = "oVc8a2FXrb";

async function nonExistingUser(req, res, next) {
    // let {username, password} = req.headers;
    let username = req.headers.username;
    let password = req.headers.password;
    let findUser = await UserModel.findOne({
        username: username,
    });

    if (findUser) {
        res.status(401).json({
            message: `User ${username} exists`,
            result: {},
        });
        return;
    }
    next();
    return;
}

async function existingUser(req, res, next){
    let username = req.headers.username;
    let password = req.headers.password;
    let findUser = await UserModel.findOne({
        username: username,
        password: password,
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

async function authorizedUser(req, res, next) {
    let { authorization } = req.headers;
    try {
        jwt.verify(authorization.substring("Bearer ".length), jwtSecretKey);

        let decodedInfo = jwt.decode(authorization.substring("Bearer ".length));

        if (decodedInfo === null) {
            res.status(401).json({
                message: "Invalid Credentials",
                result: {},
            });
            return;
        }
        let username = decodedInfo.username;
        let findUser = await UserModel.findOne({
            username: username,
        });

        if (!findUser) {
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
    catch (err) {
        res.status(401).json({
            message: "Invalid Credentials",
            result: {},
        })
    }
}

module.exports = {
    existingUser,
    nonExistingUser,
    authorizedUser,
}