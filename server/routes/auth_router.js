const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post(`/login`, async (req, res, next) => {

    try {
    const { userInfo, password } = req.body

    let user = await User.findByEmailOrUsername(userInfo)
    console.log(user.id)

    if (!user) {
        let err = new Error('incorrect email or password') 
        err.status = 400
        throw err
    }

    let match = await bcrypt.compare(password, user.password_digest)

    if (!match) {
        let err = new Error('incorrect email or password') 
        err.status = 400
        throw err
    }

    

    const token = jwt.sign(
    
        { id: user.id, username: user.username, email: user.email},
    
        'cakepudding',
      
        {expiresIn: '24h'}
    )

    res.json([{ token }, {id: user.id}])

    } catch(err) {
        next(err)
    }



})

module.exports = router