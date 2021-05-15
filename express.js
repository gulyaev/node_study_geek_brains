const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());

app.use((req, res, next)=>{
    req.blabla="111";
    next();
});

app.all("/", (req, res, next)=>{
    console.log("all");
    next();
});

app.get("/", (req, res)=>{
    console.log(req.blabla);
    res.send("Hello world");
});

app.post("/", (req, res)=>{
    console.log(req.body);
    res.send("Ok");
});

process.on('uncaughtException', function (err) {
    console.log( "UNCAUGHT EXCEPTION " );
    console.log( "[Inside 'uncaughtException' event] " + err.stack || err.message );
});

app.listen(8888);
