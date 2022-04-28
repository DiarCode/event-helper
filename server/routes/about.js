const express = require("express");
const router = express.Router();

router
  .route("/about")
  .get((req, res) => res.send("About"))
  .post((req, res) => res.send("POST"));

module.exports = router;
