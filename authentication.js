const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const session = require('cookie-session');

app.use(cookieParser('secret'));
app.use(session({keys:['secret']}));

app.use((req, res)=>{
    let n = req.session.views || 0;
    req.session.views = ++n;
    res.end(`${n} views`);
});

app.listen(4000);