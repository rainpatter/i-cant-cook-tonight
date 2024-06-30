const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post(`/login`, async (req, res, next) => {
  try {
    const { userInfo, password } = req.body;

    let user = await User.findByEmailOrUsername(userInfo);

    if (!user) {
      let err = new Error("incorrect username or password");
      err.status = 400;
      throw err;
    }

    let match = await bcrypt.compare(password, user.password_digest);

    if (!match) {
      let err = new Error("incorrect username or password");
      err.status = 400;
      throw err;
    }

    const token = jwt.sign(
      { id: user.id, username: user.username},

      "cakepudding",

      { expiresIn: "24h" }
    );

    res.json([{ token }, { id: user.id }]);
  } catch (err) {
    next(err);
  }
});

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body
  let createdUser = await User.createUser(username, email, password)
  if (createdUser) {
   res.send( {message: 'account created successfully'})
  } else {
    let err = new Error("account could not be created")
    err.status = 400;
    res.send({message: 'account could not be created'})
  }

})

module.exports = router;
