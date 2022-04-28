const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router
  .post("/events/list", eventController.getAllEvents)
  .post("/events/create", eventController.createNewEvent);

module.exports = router;
