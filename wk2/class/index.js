/* 
npm init - y
generate an empty npm project without(-y: yes) going through an interactive process.
*/

// npm list
// npm install <library>

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
    res.send(`Sum: `)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// access: localhost:3000