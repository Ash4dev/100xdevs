# Node.js
- Allows js to be used as a backend language
- Specifically, servers can be created using HTTP library(default)

# Express.js
- Easy to user server library(uses HTTP library behind the scenes)
- HTTP library is tedious to use, so need for a simpler framework felt
- import/export vs require/.export: https://shorturl.at/gnAIY

# Middleware
- Functions that perform preliminary checks before response for a request
- included as app.use(function(req, res, next){})
    - all wrt server
    - req: data from client, res: data to client
    - next: passes control below, else stuck there (buffer circle)
- 2 types:
    1. General: run at top of script
    2. Request Specific: pass params in order of execution

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

# Express Generator
- handles all the basic set-ups, file structure to save time