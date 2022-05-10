const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/adminController");

router
  .post("/admin/add/advice", AdminController.uploadAdvice)
  .get("/admin/get/advice", AdminController.getAllAdvice);

module.exports = router;
