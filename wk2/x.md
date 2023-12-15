# Middlewares, authentication, global catches, zod

- No parallel process in JS

# Valid questions before execution:
1. authentication
2. valid input check
- If checks occur in backend (get request only), the codebase becomes ugly.
    - To make it atomic, we make these checks on middlewares
        - simply pass ht e checks as callback functions to the requests
    - helps immensly in case of multiple HTTP requests
3. middlewares take 3 inputs req, res, next
    - SOME FAMOUS:
        - RATE LIMITER

- responding twice to requests is impossible
- if not match res.status(403).json({data})
- catch body from postman: app.use(epress.json())
    - it returns me a middlewarew
    - the requests below it are called automatically
    - next() helps to pass to below

- if input is not validated, then the errror displays on the backend expoising the backend to the user making it prone to attack(use zod)
- manual checks not scalable

- zod returns what parameterss the input failed at