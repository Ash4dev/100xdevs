const express = require("express");
const app = express();
app.use(express.json());

let users = [{
    name: "John",
    kidneys:[{
        healthy: false
    },{
        healthy: true
    },{
        healthy: true
    }]
}, {
    name: "Sid",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }, {
        healthy: true
    },{
        healthy: false
    }, {
        healthy: true
    }, {
        healthy: false
    }]
}, {
    name: "Lokesh",
    kidneys: [{
        healthy: false
    }, {
        healthy: false
    }, {
        healthy: true
    }]
}, {
    name: "David",
    kidneys: [{
        healthy: false
    }, {
        healthy: false
    }]
}];

app.get("/", function(req, res){
    // eg on browser: localhost:/?id=0
    const id = req.query.id;
    let person = users[id];

    let name = person.name;
    let numKid = person["kidneys"].length;
    let goodKid = (person["kidneys"].filter((kid) => {
        return kid.healthy == true;
    })).length;
    let badKid = numKid-goodKid;

    res.json({
        name,
        numKid,
        goodKid,
        badKid
    })
    return;
});

app.post("/", function(req, res){
    const id = req.query.id;
    // app.use(express.json()); makes below line work
    // Need to create a JSON which has the status of new kidney
    
    const isGood = req.body.isGood;
    let person = users[id];

    person.kidneys.push({
        healthy: isGood
    });

    res.json({
        msg: "Posted!"
    })
    return;
});

app.put("/", function(req, res){

    // when we restart process, we lose progress as in-memory right now(hence need DB)
    const id = req.query.id;
    let person = users[id];
    const makeHealthy = req.body.makeHealthy;

    person["kidneys"][makeHealthy].healthy = true;
    // need to send, else request stays hung
    res.json({
        msg: "Updated!"
    })
    return;
});

app.delete("/", function(req, res){
    const id = req.query.id;
    let person = users[id];
    // delete when no kidneys are bad, makes no sense (place check) 411
    person["kidneys"] = person["kidneys"].filter((obj) => obj.healthy==true);
    res.json({
        msg: "Unhealthy kidneys removed!"
    })
    return;
});

app.listen(3000);