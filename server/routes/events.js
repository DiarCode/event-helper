const express = require("express");
const router = express.Router();
const Event = require("../models/event.model");
const jwt = require("jsonwebtoken");

router
  .post("/events/list", async (req, res) => {
    const requestBody = req.body;
    const uid = requestBody.userID;

    try {
      const listOfEvents = await Event.find({ uid: uid });
      res.json(listOfEvents);
    } catch (error) {
      res.send(error.message);
    }
  })
  .post("/events/create", async (req, res) => {
    const requestBody = req.body;
    const eventName = requestBody.eventName;
    const eventDescription = requestBody.eventDescription;
    const eventDate = requestBody.eventDate;
    const uid = requestBody.uid;

    try {
      const newEvent = await Event.create({
        eventName: eventName,
        eventDescription: eventDescription,
        eventDate: eventDate,
        uid: uid,
      });

      res.json({ status: "OK", eventID: newEvent._id });
    } catch (error) {
      console.log(error);
      res.json({ status: "ERROR", error: error.message });
    }
  });

module.exports = router;
