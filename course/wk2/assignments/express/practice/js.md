# js is like a doctor
- local search -> door -> waiting -> treatment (1 at a time: single thread)
- if need 2nd opinion, meds buy delegates -> continues with rest(async)

# exposing functionality 
- selectivly expose to world as per our wish (creating hospital)
- HTTP helps us to create hospital (bridge bwn accessor & provider)
- HTTP: HyperText Transfer Protocol server to expose (use express)
- HTTP servers: language-framework independent (delegate to vendors)

# express
- expose one functionality at a time (like sub-clinic in hospital) use apps
- get from apps (path, functionality) req & send it to user res
- app.listen(3000)
    - 3000 is the port (https://www.cloudflare.com/learning/network-layer/what-is-a-computer-port/)
        - Standard Virtual point where network connections start and end. 
        - Ports are software-based and managed by a computer's OS
        - Each port is associated with a specific process or service. 
        - Different traffics enter different ports (firewall block some)

# request
- localhost:portNum/?qParam1=val1...
    - always send back strings
- 4 common methods: wrt to client
    1. GET: retrieve data
    2. POST: create new object on server
    3. PUT: update object with new value
    4. DELETE: delete data
- status codes(no need to but good practices):
    1. 200 (great surgery) -> Great
    2. 404 (doctor not in hospital) -> Logic doesn't exist
    3. 500 (mid surgery light went) -> Execution/Network Error
    4. 411 (wrong person came to surgery) -> Input error
    5. 403 (not allowed in hospital) -> Authorization error

# make sure to close the webpage & reopen it if changes are made to index.js