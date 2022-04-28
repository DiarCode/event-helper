const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
  .route("/register")
  .get((req, res) => res.send("Register"))
  .post(userController.registration);

module.exports = router;
