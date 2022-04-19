const mongoose = require("mongoose");
const schema = mongoose.Schema;
const womenShoesSchema = new schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    images:{
        type:Array
    },
    category:{
        type:String,
        require:true
    },
    status:{
        type:String,
        required:false
    },
    sizes:{
        type:Array,
        required:true
    }
    
    
});

module.exports = mongoose.model("womenShoes",womenShoesSchema);