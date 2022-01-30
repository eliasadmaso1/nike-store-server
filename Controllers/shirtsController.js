const shirtsModel = require('../Models/shirtsModel');

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

module.exports = {getShirts,postShirts}