var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  activities: [
    {
      actName: {
        type: String,
        required: true
      },
      actLog: [
        {
          date: Number,
          stat: Number
        }
      ]
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
