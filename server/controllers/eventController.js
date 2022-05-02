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
      const { eventID, noteTitle } = req.body;
      const data = await Event.findById(eventID);

      const filteredEventNotes = data.eventNotes.filter(
        note => note.noteTitle !== noteTitle
      );
      data.eventNotes = filteredEventNotes;
      data.save();

      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async deleteMeal(req, res) {
    try {
      const { eventID, mealServe } = req.body;
      const data = await Event.findById(eventID);

      const filteredEventMeals = data.eventMeals.filter(
        meal => meal.mealServe !== mealServe
      );
      data.eventMeals = filteredEventMeals;
      data.save();

      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async deleteGuest(req, res) {
    try {
      const { eventID, guestName } = req.body;
      const data = await Event.findById(eventID);

      const filteredEventGuests = data.eventGuests.filter(
        guest => guest.guestName !== guestName
      );
      data.eventGuests = filteredEventGuests;
      data.save();

      res.json({ success: true });
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

  async createNewMeal(req, res) {
    try {
      const { eventID, mealServe, mealName } = req.body;

      const data = await Event.findById(eventID);

      data.eventMeals.push({ mealServe: mealServe, mealName: mealName });
      data.save();

      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async createNewGuest(req, res) {
    try {
      const { eventID, guestName, guestSeat } = req.body;

      const data = await Event.findById(eventID);

      data.eventGuests.push({ guestName: guestName, guestSeat: guestSeat });
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

  async getMealsList(req, res) {
    try {
      const eventID = req.body.eventID;
      const data = await Event.findById(eventID);
      res.send(data && data.eventMeals);
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  async changeEventDate(req, res) {
    try {
      const { eventID, newDate } = req.body;
      const data = await Event.findById(eventID);
      data.eventDate = newDate;
      data.save();
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }
}

module.exports = new EventController();
