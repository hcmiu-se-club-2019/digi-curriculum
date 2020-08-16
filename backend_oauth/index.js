const express = require('express');
const app = express();
const passport = require('passport')
const passportSetup = require('./config/passport-setup')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const profileRoute = require('./Routes/profileRoute')
const authRoute = require('./Routes/authRoute');
const cors = require('cors');

global.UserData = {};

// Serve the static files from the React app

mongoose.connect(keys.mongodb.dbID, 
    {useNewUrlParser:true, useUnifiedTopology: true},
    () => {
    console.log('connected to db');
})


app.use(cors());

// cookie session 
app.use(cookieSession({
    maxAge: 60 * 1000,//24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/profile', profileRoute);
app.use('/auth', authRoute);

app.get('/user', (req,res) => {
    //console.log(global.UserData);
    res.send(global.UserData);
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);