const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send(
    '<h1>Event-Helper</h1><h3>See the entire webiste on the<a href="https://event-helper-online.herokuapp.com">Webiste</a></h3><h4>To see documentaion of api, see<a href="https://event-helper-server.herokuapp.com/api-docs/#/">API DOCUMENTATION</a></h4>'
  );
});

module.exports = router;
