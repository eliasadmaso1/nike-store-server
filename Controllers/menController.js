const menShoesModel = require("../Models/menShoesModel");

async function getMenShoes(req, res) {
  try {
    await menShoesModel.find({}, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (e) {
    console.log(e);
  }
}

async function postMenShoes(req, res) {
  try {
    await menShoesModel.insertMany([req.body.shoe], (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getMenShoes,
  postMenShoes,
};
