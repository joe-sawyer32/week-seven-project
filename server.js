const express = require("express");
const app = express();
const port = process.env.port || 8080;
const path = require("path");

// MONGOOSE
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const DB = "stattrackerDB";
const dbUrl = `mongodb://localhost:27017/${DB}`;

// CONNECT TO DB
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log(`Connected to database: ${DB}`);
  })
  .catch(err => {
    console.log(`Unable to connect: ${err}`);
  });

// MIDDLEWARE

// ROUTES
app.get("/api/activities", (req, res) => {});

app.post("/api/activities", (req, res) => {});

app.get("/api/activities/:id", (req, res) => {});

app.put("/api/activities/:id", (req, res) => {});

app.delete("/api/activities/:id", (req, res) => {});

app.post("/api/activities/:id/stats", (req, res) => {});

app.delete("/api/stats/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`Spinning with express: Port ${port}`);
});
