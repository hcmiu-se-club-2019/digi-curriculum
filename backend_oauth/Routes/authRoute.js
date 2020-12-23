const router = require('express').Router();
const passport = require('passport');

// send to consent page
router.get('/google', passport.authenticate('google', {
    scope: ['profile'],
    successRedirect: '/homepage',
    failureRedirect: '/login'
}));


// Callback route for google to redirect
router.get('/google/callback', passport.authenticate('google'), (req,res) => {
    //res.send(req.user);
    //res.redirect("http://localhost:3000/google");
    res.redirect("/profile");
});

router.get('/logout', (req,res) => {
    req.logout();
    global.UserData = {};
    res.redirect('http://localhost:8080/');
});

module.exports = router;