const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routingPages = require("./routes/rootRouting");
const app = express();
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const initialPage = require("./routes/initialPage");
const PORT = process.env.PORT || 8000;

//Middlewares
app.use(cors());
app.use(express.json());

//Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Page routing
routingPages.map(route => app.use("/api", route));

//Initial page
app.use(initialPage);

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
        app.listen(PORT, () =>
          console.log(`Server is running on port ${PORT}`)
        );
      });
  } catch (error) {
    console.log(error);
  }
}
runServer();
