const mongoose = require("mongoose");
const schema = mongoose.Schema;

const favoriteSchema = new schema({
    productId: {
        type: String,
        required: true,
      },
      userId:{
        type:String,
        required:true
      }
});

module.exports = mongoose.model("favorites",favoriteSchema);