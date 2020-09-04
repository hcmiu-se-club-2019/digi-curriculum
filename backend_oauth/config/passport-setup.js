const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys')
const User = require('../model/user-model')
//const {UserData} = require('../index')
// serialize and deserialize user
passport.serializeUser((user,done) => {
    done(null,user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
})


passport.use(
    new GoogleStrategy({
        //options for google strat
        callbackURL: '/auth/google/callback',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // passport callback function

    global.UserData = profile;

    // check if user is already exist in db
    User.findOne({googleID: profile.id}).then((currentUser) => {
        if (currentUser) {
            done(null, currentUser);
        }
        else{
            new User({
                username: profile.displayName,
                googleID: profile.id
            }).save().then((newUser) => {console.log('new user created' + newUser)})
            done(null, newUser);
        }
        
    });
    
})
)