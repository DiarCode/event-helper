const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routingPages = require("./routes/rootRouting");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
routingPages.map(route => app.use("/api", route));

//Server running
async function runServer() {
  try {
    await mongoose
      .connect(
        "mongodb+srv://diarCode:Reraha22@event-helper.hs6tm.mongodb.net/event-helper",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        app.listen(process.env.PORT, () =>
          console.log(`Server is running on port ${PORT}`)
        );
      });
  } catch (error) {
    console.log(error);
  }
}
runServer();
