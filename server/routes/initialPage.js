const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) =>
    res.send("This is server for Event-helper web application")
  );

module.exports = router;
