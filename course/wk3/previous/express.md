# Node.js
- Allows js to be used as a backend language
- Specifically, servers can be created using HTTP library(default)

# Express.js
- Easy to user server library(uses HTTP library behind the scenes)
- HTTP library is tedious to use, so need for a simpler framework felt
- import/export vs require/.export: https://shorturl.at/gnAIY

# Middleware (https://www.youtube.com/watch?v=lY6icfhap2o)
- Functions that perform preliminary checks between request was received and response was sent
- 2 types:
    1. General: run at top of script
    2. Request Specific: pass params in order of execution
- included as app.use(function(req, res, next){})
    - all wrt server
    - req: data from client, res: data to client
    - next: passes control below, else stuck there (buffer circle)
        - app.type(path, rest are middlewares)
            - executed sequentially
        - (req, res) => {} also
    - global run for all
- execution of middlewares is location dependent
    - global run for all
    - perform request handling at bottom, else we need to pass next parameter to (req, res) => {} also
- information can be passed from one middleware to another, using the req and res parameters
    - next does NOT take any input parameters
- next() does not worklike return (if need to escape need return)
- when we pass middleware functions as params to request handlers, the validation and all happen behind the scenes(no need for us to check making code cleaner): inside the middleware
- use app.express(body.json()) need to be run through the middleware as we don't know the type of data beforehand
- global catch is a special error handling middleware with 4 params: err, req, res, next
    - send out custom error messages

# Dynamic Routing
- Creating individual routes for specific users violate DRY
- Solution: allow user-related details as parameters (/profile/:username)
    - userName = req.params.username (user details: req, part of params)
    - url to be entered normally on browser, no :

# Template Engines
- Not possible to write huge HTML,CSS,JS in res.send()/res.json()
- Solution: Use different files instead of res.send()/res.json()
    - ejs: HTML with JS capabilities, looks like HTML gets converted later to HTML (other: pug, jade)
    - configure ejs up top: app.set("view engine", "ejs")
    - use res.render() contains code in a file under **views** folder only
        - don't include .ejs extension in file name
        - pass other data as object as parameter
            - <%= lol%>, displays value of lol in given object

# Static Files
- frontend assets: images, stylesheets, javascript files included in **public** folder only
- middleware set up: app.use(express.static("./public"));
    - link: https://shorturl.at/bfhSW
    - access stylesheets/style.css: ../ from a folder in views:
        - ~~../public~~/stylesheets/style.css
- link with the relevant view

# Error Handling
- If we think the client is doing something wrong, we can throw them a error message
- throw error, guided to the errorHandler middleware at the backend js file, render the error page
    - inputs can be validated with infinite nesting using ZOD library
    - create the schema: schema = zod.array(zod.number)
    - boolean response: schema.safeParse(input)

# Express Generator
- handles all the basic set-ups, file structure to save time