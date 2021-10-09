const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//Set Cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//Import Routes
const user = require("./routes/User.Routes");
const journey = require("./routes/Journey.Routes")
const timeTable = require("./routes/TimeTable.Routes");

//use Routes
app.use("/api/v1/user", user);
app.use("/api/v1/journey", journey)
app.use("/api/v1/route", timeTable);

module.exports = app;
