# Express
- routing framework with minimal self functionality
- series of middleware function calls
- last middleware is the route handler

# Middlewares (https://rb.gy/yapqaw)
- functions with access to request(req) & response(res) objects & next
- all middlewares together form the request-response cycle
- Functions:
    1. execute code performing checks
    2. alter request and response objects
    3. propogate request-response cycle using res & req
- atomic middlewares enable re-usability, hence no group
- **middlewares free following middlewares from additional responsibility of input verification & stuff.**
    - *only focus on own stuff*
- next() directs flow to next middleware in line
    - execution is sequential(location-dependent)
        - universal: app.use(middleware)
        - local: pass as route handler parameters
    - does not help us escape like return, if not provided control can get stuck
    - it doesn't take any parameters
    - if we wish to use middlewares after handlers, need to pass next in handlers as well
- global catch is a special error handling middleware with 4 params: err, req, res, next
    - send out custom error messages
- Eg. app.express(body.json()) used to parse json body
    - type is not known before hand
    - globally applicable for handlers below it

