const express = require("express");
const app = express();
const port = process.env.port || 8080;
const path = require("path");
const bodyParser = require("body-parser");

// MONGOOSE
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const DB = "stattrackerDB";
const dbUrl = `mongodb://localhost:27017/${DB}`;
const User = require(path.join(__dirname, "/models/User"));

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
app.use("/api", express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());

// ROUTES
// route for adding new users
// app.post("/api/users", (req, res) => {
//   console.log(req.body.activities[0]);
//   var newUser = new User({
//     username: req.body.username,
//     password: req.body.password,
//     displayName: req.body.displayName,
//     activities: [
//       {
//         actName: req.body.activities[0].actName,
//         actLog: req.body.activities[0].actLog
//       }
//     ]
//   });
//   newUser
//     .save()
//     .then(addedUser => {
//       res.send(addedUser);
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     });
// });

app.get("/api/activities", (req, res) => {
  User.find({ where: { username: req.user } })
    .then(foundUser => {
      res.send(foundUser.activities);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.post("/api/activities", (req, res) => {});

app.get("/api/activities/:id", (req, res) => {});

app.put("/api/activities/:id", (req, res) => {});

app.delete("/api/activities/:id", (req, res) => {});

app.post("/api/activities/:id/stats", (req, res) => {});

app.delete("/api/stats/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`Spinning with express: Port ${port}`);
});
