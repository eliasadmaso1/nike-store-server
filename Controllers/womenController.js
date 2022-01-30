const womenShoesModel = require("../Models/womenShoesModel");


async function getWomenShoes(req,res){
    
    try{
        await womenShoesModel.find({},(err,result)=>{
            if (err) throw err;
            res.json(result);
        })
    }
    catch(e){
        console.log(e);
    }
  
}

async function postWomenShoes(req,res){
    try{
       
        await womenShoesModel.insertMany( [req.body.shoe],(err,result)=>{
            if (err) throw err;
            res.json(result);
        })
    }
    catch(e){
        console.log(e);
    }
  
}
async function deleteWomenShoes(req,res){
try{
    await womenShoesModel.findByIdAndDelete(req.body.id,(err,result)=>{
        if (err) throw err;
        res.json(result);
    })
}
catch{
    console.log("error");
}
}

module.exports = {
    getWomenShoes,
    postWomenShoes,
    deleteWomenShoes
}