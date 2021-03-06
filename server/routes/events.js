const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router
  .post("/events/list", eventController.getAllEvents)
  .post("/events/create", eventController.createNewEvent)
  .post("/events/delete", eventController.deleteEvent)
  .post("/events/delete/note", eventController.deleteNote)
  .post("/events/delete/meal", eventController.deleteMeal)
  .post("/events/delete/guest", eventController.deleteGuest)
  .post("/events/get", eventController.getEventData)
  .post("/events/get/guests", eventController.getGuestsList)
  .post("/events/get/notes", eventController.getNotesList)
  .post("/events/get/meals", eventController.getMealsList)
  .post("/events/create/meal", eventController.createNewMeal)
  .post("/events/create/note", eventController.createNewNote)
  .post("/events/create/guest", eventController.createNewGuest)
  .post("/events/change/date", eventController.changeEventDate);

module.exports = router;
