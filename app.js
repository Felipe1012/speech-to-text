var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();

const bodyParser = require("body-parser");

const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const router = require("./routes/router");


const app = express();

app.listen(appEnv.port, "0.0.0.0", () => {
  console.log("Running at " + appEnv.url);
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

app.use(logger("dev"));
app.use(cookieParser());

app.use("/api", router);

module.exports = app;
