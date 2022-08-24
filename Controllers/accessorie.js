const accessoriesModel = require('../Models/accessorie');

async function getAccessories(req, res) {
    try {
      await accessoriesModel.find({}, (err, result) => {
        if (err) throw err;
        res.json(result);
      });
    } catch (e) {
      console.log(e);
    }
  }
  
  async function postToAccessories(req, res) {
    try {
      await accessoriesModel.insertMany(req.body, (err, result) => {
        if (err) throw err;
        res.json(result);
      });
    } catch (e) {
      console.log(e);
    }
  }

module.exports = {getAccessories,postToAccessories,};