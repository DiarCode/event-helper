const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router
  .post("/events/list", eventController.getAllEvents)
  .post("/events/create", eventController.createNewEvent)
  .post("/events/delete", eventController.deleteEvent)
  .post("/events/get", eventController.getEventData);

module.exports = router;
