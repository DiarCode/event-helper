const express = require("express");
const router = express.Router();
require("dotenv").config();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router
  .route("/login")
  .get((req, res) => res.send("Login"))
  .post(async (req, res) => {
    const requestBody = req.body;
    const userData = await User.findOne({
      userEmail: requestBody.emailValue,
    });

    if (userData) {
      const isPasswordValid = await bcrypt.compare(
        requestBody.passwordValue,
        userData.userPassword
      );

      if (isPasswordValid) {
        const token = jwt.sign(
          {
            userEmail: userData.userEmail,
            userName: userData.userName,
            userID: userData._id,
          },
          process.env.JWT_SECRET_KEY
        );

        return res.json({ status: "OK", user: token });
      }
    }

    res.json({ status: "ERROR", user: false });
  });
module.exports = router;
