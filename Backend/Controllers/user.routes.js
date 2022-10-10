const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const User = require("../Models/user.schema");
dotenv.config();

const userController = express.Router();

userController.get("/user",async (req,res)=>{
  const user = await User.find()
  res.send(user)
})


userController.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).send({ ok: false, msg: 'User Already exist' });
  }
  await bcrypt.hash(password, 8,  function (err, hash) {
    if (err) {
      res.status(400).send("Try again");
    }
    const user = new User({ email, password: hash });
    user.save()
    res.status(201).send(user);
  });
});
userController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.send("Invalid Username");
  }
  const hashed_password = user.password;
  bcrypt.compare(password, hashed_password, function (err, result) {
    if (result) {
      let token = jwt.sign({ email, userId: user._id }, process.env.TOKEN_KEY);
      return res
        .status(201)
        .send({ message: "Login successfull", token: token, email: email });
    } else {
      return res.status(401).send("Invalid credentials");
    }
  });
});

module.exports = userController
