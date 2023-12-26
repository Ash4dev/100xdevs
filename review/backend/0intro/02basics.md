# Express
- It is a web framework
- Callbacks to be executed once path reached wrt homeRoute(/), origin like
- can pass any kind of response to user(html, string, json)
- output from APIs can be better understood after beautifying JSON using JSON Beautifier

## Production
- Changes in code(like route addition) not visible instantly, no hot reload
- Hot reloading(changes visible instantly) not inherently available
    - restart server/nodemon
- .env files store variables that can potentially change for package users (create .env file)
    - PORT, DATABASE_URL, etc (written in caps convention)
    - const env = require("dotenv"); env.config();
        - access: process.env.PORT (must if deployed)

## Backend  Deployment
- Free hosters are very few in number due to misuse of compute power by crypto miners
- Process remains same mostly, except AWS
- node_modules are often kept in .gitignore as packages can be installed using npm install thanks to package.json & also is quite spacious
    - also add .env to .gitignore 

# Connecting Backend & Frontend
- Data can be retreived from other locations using the fetch API or use libraries like axios(simpler, popular)
- While fetching data from a server, we may face CORS error
    - Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
    - allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
        - browsers restrict cross-origin HTTP requests initiated from scripts.
- CORS ensures security so that no random person can make unnecessary calls to the server. Whitelisting is task of backend developer (depends on use-case)
    - download cors from npm & use cors middleware
    - whitelist: ports can change in local and production
- When we define routes, good practice is to use relative routes
    - full paths are lengthy, prone to change, CORS error may emerge
        - when we set proxy like '/api': "http:/localhost:3000", it gets prepended to api & also origin is set to be localhost, hence CORS error stop
- Avoid manual transportation of dist folder after building and to backend folder, as not update dynamically