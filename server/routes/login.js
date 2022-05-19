const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
  .get("/login",(req, res) => res.send("Login"))
  .post("/login", userController.login)
  .post("/login/google", userController.googleLogin)

module.exports = router;
