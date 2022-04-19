require('dotenv').config();
const mongoose = require("mongoose");






mongoose.connect(process.env.CONNECTION_STRING,{
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=> console.log("you connected to database"))
.catch(err => console.log("err:",err));

const db = mongoose.connection;
module.exports = db;
