const express = require("express");
const router = express.Router();

router
    .route("/events")
    .get((req, res) => res.send("Events"))
    .post((req, res) => res.send("POST"));

module.exports = router;