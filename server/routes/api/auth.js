const router = require('express').Router();
const User = require('mongoose').model('User');

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

router.get('/login', (req,res,next) => {
    res.send('wow')
})

module.exports = router;