const express = require('express');
const app = express();         // returns an express app
const db = require("./db");    // connect to local postgres db
db.connect();
// next - allows app to continue processing requests/responses
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, string-type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
});

 // GET all data entries from Wall table
app.get("/api/commuSquare/walls/", (req, res, next) => { 
    let walls = null;
    db.query("SELECT * FROM wall", (err, walls) => { 
         res.status(200).send(JSON.stringify(walls.rows));
    });


});


// GET wall from  Wall table based off of the wall_id
app.get("/api/commuSquare/walls/:id", (req, res, next) => {

        const id = req.params.id;
        db.query("SELECT * FROM wall WHERE wall_id = ($1)", [id] ,(err, walls) => {
            try { 
                res.status(200).send(JSON.stringify(walls.rows));
            } catch(error) { 
                console.log("Error: " + err);
            }
        });
});

// GET posts from Post table based off of the wall_id
app.get("/api/commuSquare/posts/:id", (req, res, next) => {
    const id = req.params.id;
    console.log("ID: " + id);
    db.query("SELECT * from post WHERE post_wall_id = ($1)", [id], (err, posts) => {
        try { 
            res.status(200).send(JSON.stringify(posts.rows));
        } catch(error) { 
            console.log("Error", error);
        }
    });
  
});



module.exports = app; // exports the entire express app to use on server.js