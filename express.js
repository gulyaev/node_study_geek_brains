const express = require("express");
const app = express();

const Task = require('./models/task');

console.log('task',task.get());



app.get("/", async (req, res)=>{
    const tasks = await Task.getAll();

    res.render('tasks', tasks);
});

app.listen(8888);