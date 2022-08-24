const mongoose = require("mongoose");



mongoose.connect('mongodb+srv://eliasadmaso1:eliasad123@cluster0.zgbqg.mongodb.net/ProductsStore?retryWrites=true&w=majority',{
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=> console.log("you connected to database"))
.catch(err => console.log("err:",err));

const db = mongoose.connection;
module.exports = db;
