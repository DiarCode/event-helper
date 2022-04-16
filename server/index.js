const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routingPages = require("./routes/rootRouting");
const app = express();

app.use(cors());
routingPages.map(route => app.use("/api", route));


app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
