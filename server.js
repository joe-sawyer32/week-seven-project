const express = require("express");
const app = express();
const port = process.env.port || 8080;
const path = require("path");

const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const DB = "stattrackerDB";
const dbUrl = `mongodb://localhost:27017/${DB}`;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log(`Connected to database: ${DB}`);
  })
  .catch(err => {
    console.log(`Unable to connect: ${err}`);
  });

app.listen(port, () => {
  console.log(`Spinning with express: Port ${port}`);
});
