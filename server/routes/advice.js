const express = require("express");
const router = express.Router();
const adviceController = require("../controllers/adviceController");

router.post("/advice/add", adviceController.addNewAdvice);

module.exports = router;
