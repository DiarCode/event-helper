const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routingPages = require("./routes/rootRouting");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;

//Middlewares
app.use(cors());
app.use(express.json());

//Page routing
routingPages.map(route => app.use("/api", route));

//Initial page
app.get("/", (req, res) => {
  res.send(
    "Hello, this is server for Event-Helper web application on https://event-helper-online.herokuapp.com"
  );
});

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
