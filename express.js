const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const consolidate = require("consolidate");

app.use(bodyParser.json());

app.engine("hbs", consolidate.handlebars);
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);


app.use((req, res, next)=>{
    req.blabla="111";
    next();
});

app.all("/", (res, req, next)=>{
    console.log("all");
    next();
});

app.get("/", (req, res, next)=>{
    console.log(req.blabla);
    //res.send("Hello world");
    next();
});

app.get("/users", (req, res, next)=>{
    //res.send("users");
    next();
});

app.get("/user/:id/:firstname/:lastname/:age", (req, res)=>{
    console.log(req.query);
    res.send(`User with ID#${req.params.id} 
    with firstname ${req.params.firstname} ${req.params.lastname} 
    and age ${req.params.age}`);
});

app.get("/", (req, res)=>{
    res.render("index", {
        title: "My Title",
        features: [
            {
                name: "Прочность",
                value: 10
            },
            {
                name: "Сила",
                value: 125
            },
            {
                name: "Интеллект",
                value: 50
            }
        ]
    });
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