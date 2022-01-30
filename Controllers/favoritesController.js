const favoriteModel = require("../Models/favoriteModel");

const getAllFavorites = async (req, res) => {
  const { userId } = req.params;
  try {
    await favoriteModel.find({ userId }, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (e) {
    console.log(e);
  }
};

const addFavorite = async (req, res) => {
  try {
    const filterById = {
      productId: req.body.productId,
      userId: req.body.userId,
    };
    const existingProduct = await favoriteModel.findOne(filterById);
    if (existingProduct) {
      await favoriteModel.findOneAndRemove(filterById);
    } else {
      await favoriteModel.insertMany(filterById, (err, result) => {
        if (err) throw err;
        res.json(result);
      });
    }
  } catch (e) {
    console.log(e);
  }
};



module.exports = {
  getAllFavorites,
  addFavorite
};
