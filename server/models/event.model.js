const mongoose = require("mongoose");
require("dotenv").config();

const Event = new mongoose.Schema(
  {
    uid: { type: String, required: true },
    eventName: { type: String, required: true },
    eventDescription: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventGuests: { type: Array, required: false },
    eventNotes: { type: Array, required: false },
    eventMeals: { type: Array, required: false },
  },
  { collection: process.env.MONGO_EVENTS_DATA_COLLECTION }
);

module.exports = mongoose.model("UserEvent", Event);
