const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");
const rfs = require("rotating-file-stream");
const app = express();
const port = 3000;

var logDirectory = path.join(__dirname, "log");

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = rfs("access.log", {
  interval: "1d", // rotate daily
  path: logDirectory
});

// use combined preset, see https://github.com/expressjs/morgan#combined
app.use(morgan("short", { stream: accessLogStream }));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
