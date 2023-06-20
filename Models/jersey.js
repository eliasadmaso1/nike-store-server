const mongoose = require("mongoose");
const schema = mongoose.Schema;

const JerseySchema = new schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  group:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model("Jerseys", JerseySchema);