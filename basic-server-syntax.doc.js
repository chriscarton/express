const express = require("express");

const path = require("path");

//init express
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

//Listen on a port
app.listen(5000);
