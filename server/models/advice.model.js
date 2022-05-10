const mongoose = require("mongoose");
require("dotenv").config();

const Advice = new mongoose.Schema(
  {
    adviceTitle: { type: String, required: true },
    adviceLink: { type: String, required: true },
    adviceBody: { type: String, required: true },
    adviceImageURL: { type: String, required: true },
  },
  { collection: process.env.MONGO_ADVICE_DATA_COLLECTION }
);

module.exports = mongoose.model("AdviceModel", Advice);
