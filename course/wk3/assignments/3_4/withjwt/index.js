const {adminRouter} = require("./routes/admin.js")
const {userRouter} = require("./routes/user.js");

const express = require('express');
const app = express();

// Middleware for parsing request bodies
app.use(express.json());

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
// Using routers as middlewares
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});