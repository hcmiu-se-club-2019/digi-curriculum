const router = require('express').Router();

const authCheck = (req,res,next) => {
    if (!req.user) {
        res.redirect('login');
    }
    else { next(); }
}

router.get('/', authCheck, (req,res) => {
    //res.send('You are logged in, Welcome ' + req.user.username);
    res.redirect('http://localhost:8080/');
});

module.exports = router;