const shirtsModel = require('../Models/shirt');

async function getShirts(req, res) {
    try {
      await shirtsModel.find({}, (err, result) => {
        if (err) throw err;
        res.json(result);
      });
    } catch (e) {
      console.log(e);
    }
  }
  
  async function postShirts(req, res) {
    try {
      await shirtsModel.insertMany(req.body, (err, result) => {
        if (err) throw err;
        res.json(result);
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function updateShirt(req,res){
    let filter = {_id:req.body.id}
    let update = {sizes:req.body.sizes}
    try{
      await shirtsModel.updateOne(filter,update,(err,result)=>{
        if(err) throw err;
        res.json(result)
      });
    }
    catch(e){
      console.log(e);
    }
  }

module.exports = {getShirts,postShirts, updateShirt}