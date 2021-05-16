const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const bodyParser = ('body-parser');

app.use(cookieParser('secret'));
app.use(session({keys:['secret']}));

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());  

const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy((username, password, done) => { 
    if (username !== 'admin') {
        return done(null, false);
    }

    if (password !== 'admin') {
        return done(null, false);
    }

    return done(null, {firstName: 'Vasya', lastName: 'Pupkin', username: 'admin', id: 1});
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    done(null, {firstName: 'Vasya', lastName: 'Pupkin', username: 'admin', id: 1});
});

const auth = passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/login'
});

app.get('/login', (req, res)=>{
    res.send('TODO: Login form');
});

app.post('/login', auth);

const mustBeAuthenticated = (req, res, next) => {
    if(req.isAuthenticaded()) {
        next();
    } else {
        res.redirect('/login');
    }
};

app.all('/user', mustBeAuthenticated);
app.all('/user/*', mustBeAuthenticated);

app.get('/user', (req, res) => {
    res.send('TODO: User profile');
});

app.get('/user/settings', (req, res) => {
    res.send('TODO: User settings');
});

app.listen(4000);