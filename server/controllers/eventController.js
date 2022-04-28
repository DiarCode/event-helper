const Event = require("../models/event.model");
const jwt = require("jsonwebtoken");

class EventController {
  async getAllEvents(req, res) {
    const requestBody = req.body;
    const uid = requestBody.userID;

    try {
      const listOfEvents = await Event.find({ uid: uid });
      res.json(listOfEvents);
    } catch (error) {
      res.send(error.message);
    }
  }

  async createNewEvent(req, res) {
    const requestBody = req.body;
    const { eventName, eventDescription, eventDate, uid } = requestBody;

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
  }
}

module.exports = new EventController();
