const Event = require("../models/event.model");

class EventRepository {
  async findAllEventsByUID(uid) {
    const response = await Event.find({ uid: uid });
    return response;
  }

  async createNewEvent(eventName, eventDescription, eventDate, uid) {
    const response = await Event.create({
      eventName: eventName,
      eventDescription: eventDescription,
      eventDate: eventDate,
      uid: uid,
    });

    return response;
  }

  async deleteEventByID(eventID) {
    await Event.findByIdAndDelete(eventID);
  }

  async deleteNote(eventID, noteTitle) {
    const response = await Event.findById(eventID);
    const filteredEventNotes = response.eventNotes.filter(
      note => note.noteTitle !== noteTitle
    );
    response.eventNotes = filteredEventNotes;
    response.save();
  }

  async deleteMeal(eventID, mealServe) {
    const response = await Event.findById(eventID);

    const filteredEventMeals = response.eventMeals.filter(
      meal => meal.mealServe !== mealServe
    );
    response.eventMeals = filteredEventMeals;
    response.save();
  }

  async deleteGuest(eventID, guestName) {
    const response = await Event.findById(eventID);

    const filteredEventGuests = response.eventGuests.filter(
      guest => guest.guestName !== guestName
    );
    response.eventGuests = filteredEventGuests;
    response.save();
  }

  async findEventDataByID(eventID) {
    const response = await Event.findById(eventID);
    return response;
  }

  async findAllGuestsByID(eventID) {
    const response = await Event.findById(eventID);
    return response;
  }

  async createNewNote(eventID, noteTitle, noteBody) {
    const data = await Event.findById(eventID);
    data.eventNotes.push({ noteTitle: noteTitle, noteBody: noteBody });
    data.save();
  }

  async createNewMeal(eventID, mealServe, mealName) {
    const data = await Event.findById(eventID);
    data.eventMeals.push({ mealServe: mealServe, mealName: mealName });
    data.save();
  }

  async createNewGuest(eventID, guestName, guestSeat) {
    const data = await Event.findById(eventID);
    data.eventGuests.push({ guestName: guestName, guestSeat: guestSeat });
    data.save();
  }

  async changeEventDate(eventID, newDate) {
    const data = await Event.findById(eventID);
    data.eventDate = newDate;
    data.save();
  }
}

module.exports = new EventRepository();
