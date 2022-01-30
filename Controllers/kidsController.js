const kidsShoesModel = require("../Models/kidsShoesModel");

async function getKidsShoes(req, res) {
  try {
    await kidsShoesModel.find({}, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (e) {
    console.log(e);
  }
}

const getKidsShoesById = async (req, res, next) => {
  try {
    const product = await kidsShoesModel.findById(req.params.id);
    console.log(product);
    res.status(200).json({ product });
  } catch (e) {
    console.log("product not found");
    next(new ErrorResponse("server error", 400));
  }
};

async function postKidsShoes(req, res) {
  try {
    await kidsShoesModel.insertMany([req.body.shoe], (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getKidsShoes,
  getKidsShoesById,
  postKidsShoes,
};
