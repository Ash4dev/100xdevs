# Authorization vs Authentication
1. authentication verifies identity of the user
2. authorization verifies validity of user's requests

# Authorization approaches
1. Session ID (needs storage in backend server)
2. JWT (no storage needed in backend server)
    - also promotes re-usability across servers 

# JWT (https://jwt.io/introduction)
- JSON Web Token (used in single sign-in)
- purpose: authorization & secured information transfer as JSON
- Structure: xxxxxxxxx.yyyyyyyy.zzzzzzz
    1. Header: token type & signing algorithm
    2. Payload: contains claims (3 letter only)
        - Claims: user & other info
            1. Registered Claims: recommeded but not mandatory
                - iat(issued at), exp(expiry), sub(subject), aud(audience)
            2. Public Claims: defined by JWT user at own will
            3. Private Claims: Rest claims
        - **protects against tampering not unwanted visibility**
    3. Signature: Base64Url encode the header and body, put it along with the **secret(set by Backend)** & hash it with the decided algorithm
- Each of the parts are separated using periods(.)

# JWT can be decoded but all, but verified only by the backend server

# Authentication (aka Verification)
- when the client authenticates, a JWT is sent back to the client
    - store safely else others can disguise themselves as you
    - expire them timely to ensure security
- whenever we send a request to the backend, we also send the JWT in the header (https://rb.gy/vae7ce)
    - if the JWT is tampered with, say give more permissions, 
        - the Base64Url encoded body changes, & also the signature at end after hashing. 
        - Change detected in the signature produced by the backend and one provided by the user
        - Only need to store secret key safely on our backend server
- also acts a single gateway for multiple applications if they share the same secret key

- open bank account -> deposit money -> get checkbook(jwt)
- checkbook allows us to pay anyone by writing their name and signingn on it