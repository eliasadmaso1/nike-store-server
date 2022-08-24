const mongoose = require("mongoose");

const schema = mongoose.Schema;

const playerSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },

  position: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  strengths: {
    type: String,
    required: true,
  },
 
 
});

module.exports = mongoose.model("players", playerSchema);