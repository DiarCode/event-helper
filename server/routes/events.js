const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router
  .post("/events/list", eventController.getAllEvents)
  .post("/events/create", eventController.createNewEvent)
  .post("/events/delete", eventController.deleteEvent)
  .post("/events/delete/note", eventController.deleteNote)
  .post("/events/get", eventController.getEventData)
  .post("/events/get/guests", eventController.getGuestsList)
  .post("/events/get/notes", eventController.getNotesList)
  .post("/events/create/note", eventController.createNewNote);

module.exports = router;
