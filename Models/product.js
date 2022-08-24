const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },

  issubited: {
    type: Boolean,
    required: true,
  },
 
});

module.exports = mongoose.model("products", productSchema);
