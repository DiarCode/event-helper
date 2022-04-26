const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
require("dotenv").config();

router
  .route("/register")
  .get((req, res) => res.send("Register"))
  .post(async (req, res) => {
    try {
      const requestBody = req.body;
      const hashedPassword = await bcrypt.hash(requestBody.passwordValue, 10);
      await User.create({
        userName: requestBody.nameValue,
        userEmail: requestBody.emailValue,
        userPassword: hashedPassword,
      });
      res.json({ status: "OK" });
    } catch (error) {
      res.json({ status: "ERROR", error: error.message });
    }
  });

module.exports = router;
