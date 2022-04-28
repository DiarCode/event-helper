const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
  .route("/login")
  .get((req, res) => res.send("Login"))
  .post(userController.login);


module.exports = router;
