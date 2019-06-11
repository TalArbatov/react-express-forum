const router = require('express').Router();
const User = require('mongoose').model('User');
const passport = require('passport');


router.post('/login', (req,res,next) => {
    const {username,email,password} = req.body;
    console.log(req.body)
    const newUser = new User({
        username, email, password
    })
    newUser.save((err, product) => {
        if(!err)
            res.send({msg: 'success!'})
        else res.send({msg: err})
    })
})

router.get('/fb-login', passport.authenticate('facebook'))

router.get('/login', (req,res,next) => {
    res.send('wow')
})
router.get('/return', 
  passport.authenticate('facebook', { failureRedirect: '/api/auth/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;