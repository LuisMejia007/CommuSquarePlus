const express = require('express');
const app = express();  // returns an express app
const db = require("./db");
db.connect();
// next - allows app to continue processing requests/responses
app.use((req, res, next) => {
    console.log("First Endpoint!");
    next();
});

app.use((req, res, next) => { 
    const msg = "Sending back Response!";
    db.query("SELECT * FROM wall", (err, res) => { 
        console.log(err, res);
    });
    res.send(msg);
})


module.exports = app; // exports the entire express app to use on server.js