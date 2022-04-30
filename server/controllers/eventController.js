const Event = require("../models/event.model");

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

      res.json({ success: true, eventID: newEvent._id });
    } catch (error) {
      console.log(error);
      res.json({ success: false, error: error.message });
    }
  }

  async deleteEvent(req, res) {
    try {
      const eventID = req.body.eventID;
      await Event.findByIdAndDelete(eventID);
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }
  
  async deleteNote(req, res) {
    try {
      const { eventID, noteTitle, noteBody } = req.body;
      const data = await Event.findById(eventID);

      const filteredEventNotes = data.eventNotes.filter(
        note => note.noteTitle !== noteTitle
      );
      data.eventNotes = filteredEventNotes;
      data.save();

      res.json({ success: true, data: noteTitle });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async getEventData(req, res) {
    try {
      const eventID = req.body.eventID;
      const data = await Event.findById(eventID);
      res.send(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  async getGuestsList(req, res) {
    try {
      const eventID = req.body.eventID;
      const data = await Event.findById(eventID);
      res.send(data && data.eventGuests);
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  async createNewNote(req, res) {
    try {
      const { eventID, noteTitle, noteBody } = req.body;

      const data = await Event.findById(eventID);

      data.eventNotes.push({ noteTitle: noteTitle, noteBody: noteBody });
      data.save();

      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async getNotesList(req, res) {
    try {
      const eventID = req.body.eventID;
      const data = await Event.findById(eventID);
      res.send(data && data.eventNotes);
    } catch (error) {
      res.json({ error: error.message });
    }
  }
}

module.exports = new EventController();
