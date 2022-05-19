const mongoose = require("mongoose");
require("dotenv").config();

const User = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true, unique: true },
    userPassword: { type: String, required: false },
    isAdmin: { type: Boolean, required: true },
  },
  { collection: process.env.MONGO_USER_DATA_COLLECTION }
);

module.exports = mongoose.model("UserData", User);
