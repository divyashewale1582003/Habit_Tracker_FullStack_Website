// requiring express and creating port
const express = require("express");

const app = express();
const env = require('dotenv').config();
const port = process.env.PORT || 8000;
const db = require("./config/mongoose");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const connectToMongo = require("./config/mongoose");
const Habit = require("./models/habits");
// set view engine
app.set("view engine", "ejs");
app.set("views", "./views");
// DB Path
connectToMongo()

app.set("views", path.join(__dirname, "views"));
// extract style and scripts from subpages to layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
//Use router
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.static("./assets"));
app.use(expressLayout);
// require mongoose

// using router
app.use("/", require("./routes/index"));

// port where server listens
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in starting the server : ${err}`);
    return;
  }
  console.log(`Server is running on port: ${port}`);
});
