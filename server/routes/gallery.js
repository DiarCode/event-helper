const express = require("express");
const router = express.Router();

router
    .route("/gallery")
    .get((req, res) => res.send("Gallery"))
    .post((req, res) => res.send("POST"));

module.exports = router;