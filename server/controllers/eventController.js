const EventRepository = require("../repository/eventRepository");

class EventController {
  async getAllEvents(req, res) {
    const requestBody = req.body;
    const uid = requestBody.userID;
    try {
      const listOfEvents = await EventRepository.getEventsByUID(uid);
      res.json(listOfEvents);
    } catch (error) {
      res.send(error.message);
    }
  }

  async createNewEvent(req, res) {
    const requestBody = req.body;
    const { eventName, eventDescription, eventDate, uid } = requestBody;

    try {
      const newEvent = await EventRepository.createNewEvent(
        eventName,
        eventDescription,
        eventDate,
        uid
      );

      res.json({ success: true, eventID: newEvent._id });
    } catch (error) {
      console.log(error);
      res.json({ success: false, error: error.message });
    }
  }

  async deleteEvent(req, res) {
    try {
      const eventID = req.body.eventID;
      await EventRepository.deleteEventByID(eventID);
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async deleteNote(req, res) {
    try {
      const { eventID, noteTitle } = req.body;
      await EventRepository.deleteNote(eventID, noteTitle);

      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async deleteMeal(req, res) {
    try {
      const { eventID, mealServe } = req.body;
      await EventRepository.deleteMeal(eventID, mealServe);

      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async deleteGuest(req, res) {
    try {
      const { eventID, guestName } = req.body;
      await EventRepository.deleteGuest(eventID, guestName);

      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async getEventData(req, res) {
    try {
      const eventID = req.body.eventID;
      const data = await EventRepository.findEventDataByID(eventID);
      res.send(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  async getGuestsList(req, res) {
    try {
      const eventID = req.body.eventID;
      const data = await EventRepository.findAllGuestsByID(eventID);
      res.send(data && data.eventGuests);
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  async createNewNote(req, res) {
    try {
      const { eventID, noteTitle, noteBody } = req.body;
      await EventRepository.createNewNote(eventID, noteTitle, noteBody);

      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async createNewMeal(req, res) {
    try {
      const { eventID, mealServe, mealName } = req.body;

      await EventRepository.createNewMeal(eventID, mealServe, mealName);

      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async createNewGuest(req, res) {
    try {
      const { eventID, guestName, guestSeat } = req.body;
      await EventRepository.createNewGuest(eventID, guestName, guestSeat);

      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async getNotesList(req, res) {
    try {
      const eventID = req.body.eventID;
      const data = await EventRepository.findEventDataByID(eventID);
      res.send(data && data.eventNotes);
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  async getMealsList(req, res) {
    try {
      const eventID = req.body.eventID;
      const data = await EventRepository.findEventDataByID(eventID);
      res.send(data && data.eventMeals);
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  async changeEventDate(req, res) {
    try {
      const { eventID, newDate } = req.body;
      await EventRepository.changeEventDate(eventID, newDate);
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }
}

module.exports = new EventController();
