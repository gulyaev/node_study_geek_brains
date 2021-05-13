const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const session = require('cookie-session');

app.use(cookieParser('secret'));
app.use(session({keys:['secret']}));

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());  

const LocalStrategy = require('passport-local').Strategy;
passport.use();

app.listen(4000);