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

async function updateWomenShoes(req,res){
    let filter = {_id:req.body.id}
    let update = {sizes:req.body.sizes}
    try{
      await womenShoesModel.updateOne(filter,update,(err,result)=>{
        if(err) throw err;
        res.json(result)
      });
    }
    catch(e){
      console.log(e);
    }
  }

module.exports = {
    getWomenShoes,
    postWomenShoes,
    deleteWomenShoes,
    updateWomenShoes
}