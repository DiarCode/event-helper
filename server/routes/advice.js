const express = require("express");
const router = express.Router();

router
  .route("/advice")
  .get((req, res) => {
    const json = [
      { id: 1, advice: "Be happy" },
      { id: 2, advice: "Don't worry" },
    ];
    res.json(json);
  })
  .post((req, res) => {
    res.send("POST");
  });

module.exports = router;
